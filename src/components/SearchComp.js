import React from "react";
import { SearchCompStyles } from "../styles/SearchCompStyles";

const SearchComp = props => {
  return (
    <SearchCompStyles>
      <form className="search-container" onSubmit={e => props.onSubmit(e)}>
        <input
          className="search-input"
          name="searchInput"
          placeholder="Enter search "
          value={props.value}
          onChange={e => props.onChange(e)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </SearchCompStyles>
  );
};

export default SearchComp;
