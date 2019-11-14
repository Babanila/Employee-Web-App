import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import ErrorComp from "./ErrorComp";
import { RegisterStyles } from "../styles/RegisterStyles";

const Register = () => {
  const [id, setId] = useState("");
  const [employee_name, setName] = useState("");
  const [employee_age, setAge] = useState("");
  const [employee_salary, setSalary] = useState("");
  const [profile_image, setPicture] = useState("");
  const [error, setError] = useState({ message: "" });
  const [redirect, setRedirect] = useState(false);

  // Create new employee
  const createEmployeeData = async data => {
    const url = "http://dummy.restapiexample.com/api/v1/create";
    try {
      const res = await axios.post(url, data);

      // Get the Id of the created employee from the response
      setId(res.data.id);
      setRedirect(true);
    } catch (e) {
      setError(e);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    createEmployeeData({
      name: employee_name,
      age: employee_age,
      salary: employee_salary,
      picture: profile_image
    });
  };

  return (
    <RegisterStyles>
      <Header pageTitle="Register Page" />
      {error.message.length !== 0 ? (
        <ErrorComp data={error} className="register-error" />
      ) : redirect ? (
        <Redirect to={`/`} />
      ) : (
        <form className="register-form" onSubmit={handleSubmit}>
          <h1>New Employee Registration Form</h1>
          <h3>Kindly fill all the fields below.</h3>
          <input
            className="form-input"
            name="employee_name"
            value={employee_name}
            placeholder="Name"
            onChange={e => {
              setName(e.target.value);
            }}
          />
          <input
            className="form-input"
            name="employee_age"
            value={employee_age}
            placeholder="Age"
            onChange={e => {
              setAge(e.target.value);
            }}
          />
          <input
            className="form-input"
            name="employee_salary"
            value={employee_salary}
            placeholder="Salary"
            onChange={e => {
              setSalary(e.target.value);
            }}
          />
          <input
            className="form-input"
            name="profile_image"
            value={profile_image}
            placeholder="Picture"
            onChange={e => {
              setPicture(e.target.value);
            }}
          />
          <button className="form-button" type="submit">
            Register
          </button>
        </form>
      )}
    </RegisterStyles>
  );
};

export default Register;
