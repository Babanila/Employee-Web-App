import styled from "@emotion/styled";

export const EmployeeDetailsStyles = styled.div`
  min-width: 320px;
  margin-top: 7rem;
  .root-details {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-self: center;
    justify-content: center;
    align-content: center;
    color: #000000;
    background-color: #ffffff;

    .msg-details {
      width: 20%;
      color: green;
      display: inline-flex;
      font-size: 1.3rem;
      font-family: "Noe Display";
      font-weight: bold;
      margin: 0 auto;
      position: fixed;
      top: 21.5em;
      right: 14em;
    }

    .details {
      width: 30%;
      min-width: 200px;
      display: inline-flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-self: center;
      color: black;
      font-size: 1.5rem;
      font-family: "Noe Display";
      font-weight: bold;
      padding: 1em;

      .outer-details {
        margin-right: 1rem;
        margin-left: 4rem;
        @media all and (max-width: 767px) {
          margin-left: 0;
        }
      }

      .inner-details-input {
        max-width: 50%;
        color: blue;
        font-size: 1.5rem;
        background: #e9e9e9;
        outline: none;
      }

      .inner-details {
        color: blue;
      }
    }

    .button-group {
      width: 80%;
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      background-color: #ffffff;
      font-size: 20px;
      justify-content: center;
      margin-top: 2em;

      .back-button {
        min-width: 60px;
        background-color: black;
        color: #ffffff;
        font-size: 20px;
        align-self: center;
        border-radius: 5px;
        padding: 10px;
        margin-left: 1em;
        &:hover {
          cursor: pointer;
          background-color: red;
        }
      }

      .update-button {
        min-width: 60px;
        background-color: green;
        color: #ffffff;
        font-size: 20px;
        align-self: center;
        border-radius: 5px;
        padding: 10px;
        margin-left: 1em;
        &:hover {
          cursor: pointer;
          background-color: black;
        }
      }
    }
  }

  .data-loading {
    width: 80%;
    height: 50%;
    margin: 0 auto;
    margin-top: 5em;
    padding: 0 auto;
    font-size: 2rem;
    color: #000000;
    text-align: center;
  }
`;
