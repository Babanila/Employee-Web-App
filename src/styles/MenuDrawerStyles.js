import styled from "@emotion/styled";

export const MenuDrawerStyles = styled.div`
  background: #192661;
  color: #ffffff;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 5em;
  left: 0;
  width: 20%;
  height: 50%;
  max-width: 400px;
  z-index: 200;

  .nav-ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .route-nav li {
    padding: 15px 5px;
    text-align: center;
  }

  .nav-link {
    color: #ffffff;
    text-decoration: none;
    font-size: 25px;
  }

  .nav-link:hover {
    color: #adff2f;
  }

  .nav-link:active {
    color: #ffff00;
  }
`;

/*

.nav-link {
    color: #ffffff;
    text-decoration: none;
    text-align: left;
    font-size: 25px;
    background: #00f;
  }

*/
