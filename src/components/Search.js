import React from "react";
import { SearchStyles } from "../styles/SearchStyles";

const Search = props => {
  return (
    <SearchStyles>
      <form className="search-container" onSubmit={props.onSubmit}>
        <input
          className="search-input"
          name="searchInput"
          placeholder="Enter search "
          value={props.value}
          onChange={props.onChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </SearchStyles>
  );
};

export default Search;
