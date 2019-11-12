import styled from "@emotion/styled";

export const EmployeeDetailsStyles = styled.div`
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

      color: #ff0000;
      font-size: 1.3rem;
      font-family: "Noe Display";
      font-weight: bold;
      padding: 0.5em;
      margin: 0 auto;
      position: fixed;
      top: 22.5rem;
      right: 5rem;
    }

    .details {
      width: 50%;
      align-self: center;
      color: #19232d;
      font-size: 1.5rem;
      font-family: "Noe Display";
      font-weight: bold;
      padding: 1em;

      .outer-details {
        margin-left: 35%;
      }

      .inner-details {
        width: 50%;
        color: #3300ff;
        align-self: center;
        text-align: center;
        padding: 1em;

        .inner-details-input {
          width: 30%;
          color: #3300ff;
          text-align: center;
          font-size: 1.3rem;
          padding: 0.2em;
        }
      }
    }

    .button-group {
      width: 50%;
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      background-color: #ffffff;
      font-size: 20px;
      justify-content: center;
      margin-top: 2em;

      .epd-back {
        width: 20%;
        background-color: #192661;
        color: #ffffff;
        font-size: 20px;
        align-self: center;
        border-radius: 5px;
        padding: 10px;
        margin-left: 1em;
        &:hover {
          cursor: pointer;
          background-color: #00b300;
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
