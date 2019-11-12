import React, { useState } from "react";
import { RegisterStyles } from "../styles/RegisterStyles";
import Header from "./Header";

const Register = props => {
  // const [newEmployee, setNewEmployee] = useState({});

  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);
  const [salary, setSalary] = useState([]);
  const [picture, setPicture] = useState([]);
  const [error, setError] = useState([]);

  const createEmployeeData = async data => {
    const url = "http://dummy.restapiexample.com/api/v1/create";
    try {
      const result = fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      employee_name: name,
      employee_age: age,
      employee_salary: salary,
      profile_image: picture
    };

    createEmployeeData(data);
  };

  const errorOutput = data => <div className="register-error">Error: {data}</div>;

  return (
    <div>
      <Header pageTitle="Register Page" />
      {error && error.length !== 0 ? (
        errorOutput(error)
      ) : (
        <RegisterStyles>
          <form className="register-form" onSubmit={handleSubmit}>
            <h1>New Employee Registration Form</h1>
            <h3>Kindly fill all the fields below</h3>
            <input
              className="form-input"
              name="name"
              value={name}
              placeholder="Name"
              // onChange={handleInputChange}
              onChange={e => {
                setName(e.target.value);
              }}
            />
            <input
              className="form-input"
              name="age"
              value={age}
              placeholder="Age"
              onChange={e => {
                setAge(e.target.value);
              }}
            />
            <input
              className="form-input"
              name="salary"
              value={salary}
              placeholder="Salary"
              onChange={e => {
                setSalary(e.target.value);
              }}
            />
            <input
              className="form-input"
              name="picture"
              value={picture}
              placeholder="Picture"
              onChange={e => {
                setPicture(e.target.value);
              }}
            />
            <button className="form-button" type="submit">
              Register
            </button>
          </form>
        </RegisterStyles>
      )}
    </div>
  );
};
export default Register;

/*
      <form>
        <h1>Registration Form</h1>
        <label className="spn1">Name :</label>
        <input className="name" name="name" type="text" />
        <label className="spn1">Age :</label>
        <input className="name" name="age" type="text" />
        <label className="spn1">Salary :</label>
        <input className="name" name="salary" type="text" />
        <label className="spn1">Picture :</label>&nbsp;
        <input className="picture" name="picture" type="picture" />
        <button className="submit" type="submit">
          Register
        </button>
      </form> */
