import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import useDeepCompareEffect from "use-deep-compare-effect";
import Header from "./Header";
import ErrorComp from "./ErrorComp";
import { EmployeeDetailsStyles } from "../styles/EmployeeDetailsStyles";

function EmployeeDetails(props) {
  const { id } = props.match.params;

  const [employeeDetails, setEmployeeDetails] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  // Fetch data from the API using the employee ID
  const getEmployeeDetails = async id => {
    const url = `http://dummy.restapiexample.com/api/v1/employee/${id}`;

    try {
      // Fetch data from the API using the employee ID
      const { data } = await axios(url);
      setEmployeeDetails(data);
    } catch (e) {
      setError(e);
    }
  };

  // useDeepCompareEffect is used in place of useEffect in order to avoid multiple API calls
  useDeepCompareEffect(() => {
    getEmployeeDetails(id);
  }, [employeeDetails]);

  // Handler to Main page or root
  const handleBack = event => {
    event.preventDefault();
    setRedirect(true);
  };

  const showEmployeeDetails = employee => (
    <div className="root-details">
      <div className="details" data-label="id">
        ID: <span className="inner-details">{employee.id}</span>
      </div>
      <div className="details" data-label="employee_name">
        Name: <span className="inner-details">{employee.employee_name}</span>
      </div>
      <div className="details" data-label="employee_age">
        Age: <span className="inner-details">{employee.employee_age}</span>
      </div>
      <div className="details" data-label="employee_salary">
        Salary: <span className="inner-details">{employee.employee_salary}</span>
      </div>
      <button className="epd-back" onClick={handleBack}>
        Back
      </button>
    </div>
  );

  return (
    <EmployeeDetailsStyles className="table-row">
      <Header pageTitle="Employee Details" />
      {error && <ErrorComp data={error} />}
      {Object.keys(employeeDetails).length === 0 ? (
        <div className="data-loading"> Loading ...</div>
      ) : redirect ? (
        <Redirect to="/" />
      ) : (
        showEmployeeDetails(employeeDetails)
      )}
    </EmployeeDetailsStyles>
  );
}

export default EmployeeDetails;
