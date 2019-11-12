import styled from "@emotion/styled";

export const HeaderStyles = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: #192661;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  overflow: hidden;

  h1 {
    float: left;
    display: block;
    color: #ffffff;
    text-align: center;
  }
`;
