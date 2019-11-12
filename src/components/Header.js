import React, { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import MenuToggleDrop from "./MenuToggleDrop";
import MenuToggleButton from "./MenuToggleButton";
import { HeaderStyles } from "../styles/HeaderStyles";

const Header = props => {
  const [menuToggle, setMenuToggle] = useState(false);

  // Setting drawer toggle
  const handleMenuToggle = () => setMenuToggle(!menuToggle);
  const menuToggleDropHandler = () => setMenuToggle(false);

  /*
  const { pageTitle } = props;
  let title;
  // Set Page header title
  if (pageTitle == "/") title = "Main Page";
  if (pageTitle == "/search") title = "Search Page";
  if (pageTitle == "/register") title = "Registration Page";
  else {
    title = pageTitle;
  }
  */

  return (
    <HeaderStyles>
      <MenuToggleButton click={handleMenuToggle} />
      <h1>{props.pageTitle}</h1>
      <div className="spacer"></div>
      {menuToggle && <MenuToggleDrop click={menuToggleDropHandler} />}
      {menuToggle && <MenuDrawer />}
    </HeaderStyles>
  );
};

export default Header;
