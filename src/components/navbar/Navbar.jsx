import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";

// Using CSS BEM (Block Element Modifier) syntax

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
