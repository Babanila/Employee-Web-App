import React from "react";
import { MenuToggleButtonStyles } from "../styles/MenuToggleButtonStyles";

const MenuToggleButton = props => (
  <MenuToggleButtonStyles className="toggle-button" onClick={props.click}>
    <div className="button-line" />
    <div className="button-line" />
    <div className="button-line" />
  </MenuToggleButtonStyles>
);

export default MenuToggleButton;
