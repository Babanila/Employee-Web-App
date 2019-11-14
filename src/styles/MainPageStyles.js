import styled from "@emotion/styled";

export const MainPageStyles = styled.div`
  .error-contain {
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

  .contain {
    width: 100%;
    background-color: #ffffff;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
  }

  #link-cols {
    color: #000000;
    text-decoration: none;

    .cols-li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border: 1px solid #cccccc;
      &:hover {
        cursor: pointer;
        border: 1px solid #9bc2e5;
        background-color: #95a5a6;
      }
    }
  }

  .sorter-div {
    width: 100%;
    height: 9%;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #ffffff;
    position: fixed;
    top: 4.8em;
    left: 0;
    z-index: 95;

    h3 {
      color: red;
    }

    .sorter-label {
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
      margin-right: 1em;
      color: blue;
    }

    .sorter-button {
      min-width: 5%;
      height: 60%;
      text-align: center;
      font-size: 0.8rem;
      font-weight: bold;
      border: 1px solid gray;
      border-radius: 5px;
      padding: 2px;
      background-color: gray;
      margin-bottom: 0px;
      color: #ffffff;
      &:hover {
        cursor: pointer;
        border: 1px solid #9bc2e5;
        background-color: #192661;
      }
    }

    .sorter-spacer {
      width: 2%;
      height: 50%;
      text-align: center;
    }
  }

  h2 {
    font-size: 26px;
    margin: 20px 0;
    text-align: center;
    small {
      font-size: 0.5em;
    }
  }

  .responsive-table {
    position: relative;
    top: 12em;

    li {
      width: 90%;
      border-radius: 3px;
      padding: 15px 30px;
      display: flex;
      justify-self: center;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .table-header {
      width: 88%;
      position: fixed;
      top: 5.5em;
      left: 2em;
      z-index: 90;
      background-color: #95a5a6;
      align-self: center;
      margin: 0 auto;
      font-size: 1.5em;
      text-transform: uppercase;
      letter-spacing: 0.01em;
      list-style-type: none;
      text-decoration: none;
    }

    .table-row {
      margin-left: 0;
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    }

    .cols {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      text-decoration: none;
    }
    .cols-0 {
    }

    .cols-1 {
    }

    .cols-2 {
    }

    .cols-3 {
    }

    .cols-4 {
    }
    .cols-5 {
    }

    @media all and (max-width: 767px) {
      .table-header {
        display: none;
      }
      .table-row {
      }
      li {
        display: block;
      }
      .cols {
        flex-basis: 100%;
      }
      .cols {
        display: flex;
        padding: 10px 0;
        &:before {
          color: #6c7a89;
          padding-right: 10px;
          content: attr(data-label);
          flex-basis: 50%;
          text-align: right;
        }
      }
    }
  }
`;

/*


.mainHeader {
    background-color: #000000;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
  }


   .cols {
      display: flex;
    }
    .cols-0 {
      flex-basis: 20%;
    }

    .cols-1 {
      flex-basis: 20%;
    }

    .cols-2 {
      flex-basis: 20%;
    }

    .cols-3 {
      flex-basis: 20%;
    }

    .cols-4 {
      flex-basis: 20%;
    }


    .cols {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-decoration: none;

    &:hover {
      color: #000000;
      cursor: pointer;
      border: 1px solid #9bc2e5;
      background-color: #e6e6e6;
    }
  }


*/
