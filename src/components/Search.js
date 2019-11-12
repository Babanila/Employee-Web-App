import React, { useState, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import { SearchStyles } from "../styles/SearchStyles";
import Header from "./Header";

const Search = props => {
  const [userInput, setUserInput] = useState("");
  const [employeeData, setEmployeeData] = useState([]);

  const getEmployeeDetails = async userInput => {
    const url = `http://dummy.restapiexample.com/api/v1/employee/${userInput}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      setEmployeeData(data);

      // eslint-disable-next-line no-empty
    } catch (_) {}
  };

  // useDeepCompareEffect is used in place of useEffect in order to avoid multiple API calls
  useEffect(() => {
    // getEmployeeDetails(userInput);
  }, []);

  const handleInputChange = event => {
    event.preventDefault();
    const value = event.target.value;
    setUserInput(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    getEmployeeDetails(userInput);
  };

  return (
    <SearchStyles>
      <Header pageTitle="Search Page" />
      <h2>Search Employee List</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <label className="form-label">Enter employee ID or employee name</label>
        <input
          className="form-input"
          name="searchInput"
          placeholder="Search by ID or Name"
          value={userInput}
          onChange={e => handleInputChange(e)}
        />
        <button className="form-button" type="submit">
          Search
        </button>
      </form>
    </SearchStyles>
  );
};

export default Search;
