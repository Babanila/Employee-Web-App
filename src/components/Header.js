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
