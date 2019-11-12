import styled from "@emotion/styled";

export const EmployeeDetailsStyles = styled.div`
  margin-top: 7rem;
  .root-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000000;
    background-color: #ffffff;

    .details {
      width: 30%;
      align-self: center;
      color: #19232d;
      font-size: 1.5rem;
      font-family: "Noe Display";
      font-weight: bold;
      padding: 1em;

      .inner-details {
        color: #3300ff;
        text-align: center;
        padding: 1em;
      }
    }

    .epd-back {
      width: 20&;
      background-color: #192661;
      color: #ffffff;
      font-size: 20px;
      font-weight: 900;
      align-self: center;
      border: 3px solid #192661;
      text-transform: uppercase;
      padding: 10px;
      &:hover {
        cursor: pointer;
        border: 3px solid #ffffff;
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
