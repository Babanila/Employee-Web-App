import React from "react";
import { Link } from "react-router-dom";
import { MenuDrawerStyles } from "../styles/MenuDrawerStyles";

const MenuDrawer = () => {
  return (
    <MenuDrawerStyles>
      <nav className="route-nav">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-li">
            <Link to="/register" className="nav-link">
              Register New Employee
            </Link>
          </li>

          <li className="nav-li">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </MenuDrawerStyles>
  );
};

export default MenuDrawer;
