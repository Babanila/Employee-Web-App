import React from "react";
import Header from "./Header";
import { AboutStyles } from "../styles/AboutStyles";

const About = () => {
  return (
    <AboutStyles>
      <Header pageTitle="About Page" />
      <div className="about-div">
        <h1> Web application details </h1>

        <div className="about-div-section">
          <h3>Components </h3>
          <li> Header: Shows the title of the current page.</li>
          <li>Drawer: Allows to navigate through the web application.</li>
          <li>Main Page: The content goes here.</li>
        </div>

        <div className="about-div-section">
          <h3>The functionalities</h3>
          <li> Get all the employees</li>
          <li> Search the employee list using name</li>
          <li> Select a single employee</li>
          <li> Edit the salary of the single employee selected</li>
          <li> Register a new Employee</li>
        </div>
      </div>
    </AboutStyles>
  );
};

export default About;
