import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useDeepCompareEffect from "use-deep-compare-effect";
import Header from "./Header";
import SearchComp from "./SearchComp";
import ErrorComp from "./ErrorComp";
import { MainPageStyles } from "../styles/MainPageStyles";

function MainList(props) {
  const [employeeList, setEmployeeList] = useState([]);
  const [queryEmployeeData, setQueryEmployeeData] = useState([]);
  const [headerSearch, setHeaderSearch] = useState("");
  const [error, setError] = useState({ message: "" });

  const getEmployeeData = async () => {
    const url = `http://dummy.restapiexample.com/api/v1/employees`;
    try {
      const { data } = await axios(url);
      setEmployeeList(data);
    } catch (e) {
      setError(e);
    }
  };

  // useDeepCompareEffect is used in place of useEffect in order to avoid multiple API calls
  useDeepCompareEffect(() => {
    getEmployeeData(employeeList);
  }, [employeeList]);

  //Search employee data using name
  const searchDataByName = async headerSearch => {
    let result;
    if (headerSearch === "") return setQueryEmployeeData([]);

    if (headerSearch && error.length === 0) {
      result = await employeeList.filter(item =>
        item.employee_name.toLowerCase().includes(headerSearch.toLowerCase())
      );

      // Checking if the search parameter doesn't exist
      result.length === 0
        ? setError({
            message:
              "Search parameter doesn't exist, please enter a new value or delete the entered value and press enter"
          })
        : setQueryEmployeeData(result);
    } else {
      setQueryEmployeeData([]);
      setError({ message: "" });
    }
  };

  // User input query search
  const handleInputChange = ({ target: { value } }) => {
    console.log(value);
    setHeaderSearch(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.value);
    searchDataByName(headerSearch);
  };

  const outputData = data => {
    return data.map((employee, i) => (
      <Link to={employee.id} key={employee.id} id="link-cols">
        <li className="cols-li">
          <div className="cols cols-2" data-label="No">
            {i + 1}
          </div>
          <div className="cols cols-2" data-label="id">
            {employee.id}
          </div>
          <div className="cols cols-2" data-label="employee_name">
            {employee.employee_name}
          </div>
          <div className="cols cols-2" data-label="employee_age">
            {employee.employee_age}
          </div>
          <div className="cols cols-2" data-label="employee_salary">
            {employee.employee_salary}
          </div>
        </li>
      </Link>
    ));
  };

  const sortData = property => {
    let sortOrder = 1;

    //   // To sort in a descending order
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return (a, b) =>
      sortOrder === -1
        ? b[property].localeCompare(a[property])
        : a[property].localeCompare(b[property]);
  };

  const handleSortByName = () => {
    console.log(employeeList[0]);

    const newData = employeeList.sort(sortData("employee_name"));
    setEmployeeList(newData);

    console.log(newData);
  };

  const handleSortBySalary = () => {
    console.log(employeeList[0]);

    const newData = employeeList.sort(sortData("employee_salary"));
    setEmployeeList(newData);

    console.log(newData);
  };

  return (
    <MainPageStyles onClick={handleSubmit}>
      <Header pageTitle="Main Page" />
      <SearchComp value={headerSearch} onChange={handleInputChange} onSubmit={handleSubmit} />

      {error.message.length !== 0 ? (
        <ErrorComp data={error} />
      ) : (
        <div className="contain">
          <div className="sorter-div">
            <button className="sorter-button" onClick={handleSortByName}>
              Sort By Name
            </button>
            <div className="sorter-spacer" />
            <button className="sorter-button" onClick={handleSortBySalary}>
              Sort By Salary
            </button>
            <div className="sorter-spacer" />
          </div>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="cols cols-0">No</div>
              <div className="cols cols-1">ID</div>
              <div className="cols cols-2">Name</div>
              <div className="cols cols-3">Age</div>
              <div className="cols cols-4">Salary</div>
            </li>

            {error.length === 0 && queryEmployeeData.length !== 0
              ? outputData(queryEmployeeData)
              : outputData(employeeList)}
          </ul>
        </div>
      )}
    </MainPageStyles>
  );
}

export default MainList;

/*

{error.length === 0 &&
queryEmployeeData.length === 0 &&
employeeList.length !== 0 &&
outputData(employeeList)} 


import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDeepCompareEffect from "use-deep-compare-effect";
import Employee from "./Employee";
import Header from "./Header";
import SearchComp from "./SearchComp";
import { TableStyles } from "../styles/MainListStyles";
import sampleData from "../data";

function MainList(props) {
  const [employeeList, setEmployeeList] = useState([]);
  const [queryEmployeeData, setQueryEmployeeData] = useState([]);
  const [headerSearch, setHeaderSearch] = useState("");
  const [error, setError] = useState("");

  const getEmployeeData = async () => {
    // const url = `http://dummy.restapiexample.com/api/v1/employees`;
    try {
      // const res = await fetch(url);
      // const data = await res.json();

      // setEmployeeList(data);

      setEmployeeList(sampleData);

      // eslint-disable-next-line no-empty
    } catch (_) {}
  };

  // useDeepCompareEffect is used in place of useEffect in order to avoid multiple API calls
  useDeepCompareEffect(() => {
    getEmployeeData(employeeList);
  }, [employeeList]);

  //Search employee data using name
  const searchDataByName = async headerSearch => {
    let result;
    if (headerSearch === "") return setQueryEmployeeData([]);

    if (headerSearch && error.length === 0) {
      result = await employeeList.filter(item =>
        item.employee_name.toLowerCase().includes(headerSearch.toLowerCase())
      );

      // Checking if the search parameter doesn't exist
      result.length === 0
        ? setError(
            "Search parameter doesn't exist, please enter a new value or delete the entered value and press enter"
          )
        : setQueryEmployeeData(result);
    } else {
      setQueryEmployeeData([]);
      setError("");
    }
  };

  //Show single employee data
  const showDetails = async value => {
    let result;

    if (value) {
      result = await employeeList.filter(item => item.id === value);

      // Checking if the search parameter doesn't exist
      result.length === 0
        ? setError(
            "Search parameter doesn't exist, please enter a new value or delete the entered value and press enter"
          )
        : setQueryEmployeeData(result);
    } else {
      setQueryEmployeeData([]);
      setError("");
    }
  };

  // User input query search
  const handleInputChange = ({ target: { value } }) => {
    setHeaderSearch(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    return headerSearch !== "" ? searchDataByName(headerSearch) : setError("");
  };

  const showSingleEmployeeDetails = event => {
    event.preventDefault();
    const { value } = event;

    console.log(value, "value");

    showDetails(value);
  };

  const outputData = data => {
    return data.map((employee, i) => (
      <Link to={employee.id} key={employee.id}>
        <Employee
          key={i}
          singleEmployee={employee}
          num={i + 1}
          showDetails={showSingleEmployeeDetails}
        />
      </Link>
    ));
  };

  const sortData = property => {
    let sortOrder = 1;

    //   // To sort in a descending order
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return (a, b) =>
      sortOrder === -1
        ? b[property].localeCompare(a[property])
        : a[property].localeCompare(b[property]);
  };

  const handleSortByName = () => {
    console.log(employeeList[0]);

    const newData = employeeList.sort(sortData("employee_name"));
    setEmployeeList(newData);

    console.log(newData);
  };

  const handleSortBySalary = () => {
    console.log(employeeList[0]);

    const newData = employeeList.sort(sortData("employee_salary"));
    setEmployeeList(newData);

    console.log(newData);
  };

  const errorOutput = data => <div className="error-contain">Error: {data}</div>;
  return (
    // <TableStyles>
    <TableStyles onClick={handleSubmit}>
      <Header pageTitle={props.location.pathname} />
      <SearchComp value={headerSearch} onChange={handleInputChange} onSubmit={handleSubmit} />

      {error && error.length !== 0 ? (
        errorOutput(error)
      ) : (
        <div className="contain">
          <div className="sorter-div">
            <button className="sorter-button" onClick={handleSortByName}>
              Sort By Name
            </button>
            <div className="sorter-spacer" />
            <button className="sorter-button" onClick={handleSortBySalary}>
              Sort By Salary
            </button>
            <div className="sorter-spacer" />
          </div>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="cols cols-0">No</div>
              <div className="cols cols-1">ID</div>
              <div className="cols cols-2">Name</div>
              <div className="cols cols-3">Age</div>
              <div className="cols cols-4">Salary</div>
            </li>
            {error.length === 0 && queryEmployeeData.length !== 0 && outputData(queryEmployeeData)}

            {error.length === 0 &&
              queryEmployeeData.length === 0 &&
              employeeList.length !== 0 &&
              outputData(employeeList)}
          </ul>
        </div>
      )}
    </TableStyles>
  );
}

export default MainList;









///////

{error && error.length !== 0 && queryEmployeeData.length === 0
              ? errorOutput(error)
              : outputData(queryEmployeeData)}

            {!error &&
              error.length === 0 &&
              queryEmployeeData.length === 0 &&
              employeeList.length !== 0 &&
              outputData(employeeList)}


*/
