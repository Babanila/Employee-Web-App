import styled from "@emotion/styled";

export const RegisterStyles = styled.div`
  .register-error {
    width: 50%;
    height: auto;
    margin: 0 auto;
    margin-top: 10em;
    padding: 0 auto;
    font-size: 2rem;
    color: red;
    text-align: center;
    border: 2px solid #000000;
  }

  .register-form {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #000000;
    background-color: #ffffff;
  }

  h1,
  h3 {
    text-align: center;
  }

  .form-input {
    width: 50%;
    align-self: center;
    text-align: center;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #888888;
    border-radius: 4px;
    outline: none;
    background-color: #ffffff;
    color: #000000;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .form-button {
    background-color: #003399;
    font-size: 20px;
    font-weight: 900;
    align-self: center;
    border: 3px solid #003399;
    border-radius: 4px;
    text-transform: uppercase;
    padding: 10px;
    color: #ffffff;
    &:hover {
      cursor: pointer;
      background-color: #006400;
      border: 3px solid #006400;
    }
  }
`;

/*
// margin: 1% 25% 1% 25%;

display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  height: 100%;
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
    background-color: #003399;
    outline: none;
    border: none;
    color: #ffffff;
  }

  .search-button:hover {
    background-color: #00ff00;
  }


   input[type="text"] {
    border: 2px solid red;
    border-radius: 4px;
  }

*/
