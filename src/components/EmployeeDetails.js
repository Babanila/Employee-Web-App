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
  const [salary, setSalary] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState({ message: "" });

  // useDeepCompareEffect is used in place of useEffect in order to avoid multiple API calls
  useDeepCompareEffect(() => {
    getEmployeeDetails(id);
  }, [employeeDetails]);

  // Fetch data from the API using the employee ID
  const getEmployeeDetails = async id => {
    const url = `http://dummy.restapiexample.com/api/v1/employee/${id}`;

    try {
      // Fetch data from the API using the employee ID
      const { data } = await axios(url);

      // Setting the salary to local state
      setSalary(data.employee_salary);

      setEmployeeDetails(data);
    } catch (e) {
      setError(e);
    }
  };

  // Update employee salary using the employee ID
  const updateEmployeeSalary = async (id, data) => {
    const url = `http://dummy.restapiexample.com/api/v1/update/${id}`;

    try {
      // Response data from the API using the employee ID
      const res = await axios.put(url, data);

      setUpdateMessage("Salary updated !!!");
      setOpen(true);
    } catch (e) {
      // Error handler
      setError(e);
    }
  };

  const handleSalaryChange = ({ target: { value } }) => {
    setSalary(value);
    setOpen(false);
  };

  // Update Handler
  const handleUpdate = event => {
    event.preventDefault();

    employeeDetails.employee_salary === salary
      ? setUpdateMessage("No changes in salary")
      : // Call the update function
        updateEmployeeSalary(id, {
          name: employeeDetails.employee_name,
          age: employeeDetails.employee_age,
          salary: salary,
          picture: employeeDetails.profile_image
        });
  };

  // Handler to Main page or root
  const handleBack = event => {
    event.preventDefault();
    setRedirect(true);
  };

  const showEmployeeDetails = employee => (
    <div className="root-details">
      <div className="details" data-label="id">
        <span className="outer-details">ID:</span>
        <span className="inner-details">{employee.id}</span>
      </div>
      <div className="details" data-label="employee_name">
        <span className="outer-details">Name:</span>
        <span className="inner-details">{employee.employee_name}</span>
      </div>
      <div className="details" data-label="employee_age">
        <span className="outer-details">Age:</span>
        <span className="inner-details">{employee.employee_age}</span>
      </div>
      <div className="details" data-label="employee_salary">
        <span className="outer-details">Salary:</span>
        <input className="inner-details-input" value={salary} onChange={handleSalaryChange} />
        {/* <span className="inner-details">
        </span> */}
      </div>
      {open && <div className="msg-details">{updateMessage}</div>}
      <div className="button-group">
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
        <button className="update-button" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );

  return (
    <EmployeeDetailsStyles className="table-row">
      <Header pageTitle="Employee Details" />
      {error.message.length !== 0 ? (
        <ErrorComp data={error} />
      ) : Object.keys(employeeDetails).length === 0 ? (
        <div className="data-loading"> Loading ...</div>
      ) : redirect ? (
        <Redirect to={`/`} />
      ) : (
        showEmployeeDetails(employeeDetails)
      )}
    </EmployeeDetailsStyles>
  );
}

export default EmployeeDetails;
