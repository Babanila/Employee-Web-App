import styled from "@emotion/styled";

export const ErrorCompStyles = styled.div`
  width: 80%;
  height: 50%;
  margin: 0 auto;
  margin-top: 5em;
  padding: 0 auto;
  font-size: 2rem;
  color: red;
  text-align: center;

  .error-message {
    text-align: center;
    padding: 1em;
    font-size: 1.5rem;
  }
  .error-back {
    width: 10%;
    background-color: #192661;
    color: #ffffff;
    font-size: 20px;
    align-self: center;
    padding: 10px;
    margin-top: 2em;
    &:hover {
      cursor: pointer;
      background-color: #ff0000;
    }
  }
`;
