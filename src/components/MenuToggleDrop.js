import React from "react";
import { MenuToggleDropStyles } from "../styles/MenuToggleDropStyles";

const MenuToggleDrop = props => {
  return <MenuToggleDropStyles onClick={props.click}></MenuToggleDropStyles>;
};

export default MenuToggleDrop;
