import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useDeepCompareEffect from "use-deep-compare-effect";
import Header from "./Header";
import Search from "./Search";
import ErrorComp from "./ErrorComp";
import { MainPageStyles } from "../styles/MainPageStyles";

function MainList() {
  const [employeeList, setEmployeeList] = useState([]);
  const [queryEmployeeData, setQueryEmployeeData] = useState([]);
  const [headerSearch, setHeaderSearch] = useState("");
  const [error, setError] = useState({ message: "" });

  // useDeepCompareEffect is used in place of useEffect in order to avoid multiple API calls
  useDeepCompareEffect(() => {
    getEmployeeData(employeeList);
  }, [employeeList]);

  // Fetch employees data from the API
  const getEmployeeData = async () => {
    const url = `http://dummy.restapiexample.com/api/v1/employees`;
    try {
      const { data } = await axios(url);
      setEmployeeList(data);
    } catch (e) {
      setError(e);
    }
  };

  //Search employee data using name
  const searchDataByName = headerSearch => {
    let result;

    if (headerSearch && error.message.length === 0) {
      result = employeeList.filter(item =>
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

  const sortByName = property => {
    return function(a, b) {
      const first = a[property].toLowerCase();
      const second = b[property].toLowerCase();

      return first.localeCompare(second);
    };
  };

  const sortByNumber = property => {
    return function(a, b) {
      return a[property] - b[property];
    };
  };

  const handleSortByName = async () => {
    // event.preventDefault();
    console.log(employeeList.length);
    const newData = await employeeList.sort(sortByName("employee_name"));

    setQueryEmployeeData(newData);
  };

  const handleSortBySalary = async () => {
    // event.preventDefault();
    const newData = await employeeList.sort(sortByNumber("employee_salary"));
    setQueryEmployeeData(newData);
  };

  // User input query search
  const handleQueryInputChange = event => {
    const { value } = event.target;
    console.log(value);
    setHeaderSearch(value);
  };

  // Input search submit handler
  const handleSubmit = event => {
    event.preventDefault();
    searchDataByName(headerSearch);
  };

  const outputData = data => {
    return data.map((employee, i) => (
      <Link to={`employee/${employee.id}`} key={employee.id} id="link-cols">
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

  return (
    <MainPageStyles>
      <Header pageTitle="MainPage" />
      <Search value={headerSearch} onChange={handleQueryInputChange} onSubmit={handleSubmit} />

      {error.message.length !== 0 ? (
        <ErrorComp data={error} />
      ) : (
        <div className="contain">
          <div className="sorter-div">
            <span className="sorter-label">Sort By</span>
            <button className="sorter-button" onClick={handleSortByName}>
              Name
            </button>
            <div className="sorter-spacer" />
            <button className="sorter-button" onClick={handleSortBySalary}>
              Salary
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
            {error.message.length === 0 && queryEmployeeData.length !== 0
              ? outputData(queryEmployeeData)
              : outputData(employeeList)}
          </ul>
        </div>
      )}
    </MainPageStyles>
  );
}

export default MainList;
