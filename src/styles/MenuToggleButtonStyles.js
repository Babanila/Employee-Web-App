import styled from "@emotion/styled";

export const MenuToggleButtonStyles = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  &::focus {
    outline: none;
  }

  .button-line {
    width: 30px;
    height: 2px;
    background: white;
  }
`;

//.toggle-button:focus {
//     outline: none;
//   }
