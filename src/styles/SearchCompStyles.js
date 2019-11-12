import styled from "@emotion/styled";

export const SearchCompStyles = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
  height: 8%;
  position: fixed;
  right: 0;
  top: 1.5rem;
  z-index: 99;
  overflow: hidden;

  .search-input {
    padding: 6px;
    font-size: 1rem;
    border: none;
  }
  .search-button {
    padding: 6px;
    font-size: 1rem;
    cursor: pointer;
    background-color: darkgreen;
    outline: none;
    border: none;
    color: #ffffff;
  }

  .search-button:hover {
    background-color: #00ff33;
  }
`;

// color: #003399;
