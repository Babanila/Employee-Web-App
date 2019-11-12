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
    background-color: #006400;
    font-size: 20px;
    font-weight: 900;
    align-self: center;
    border-radius: 4px;
    padding: 10px;
    color: #ffffff;
    &:hover {
      cursor: pointer;
      background-color: #003399;
    }
  }
`;
