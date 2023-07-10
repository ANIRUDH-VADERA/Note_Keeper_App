import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/adglogo2 1.svg";

function Header() {
  return (
      <Link to="/Welcome">
        <header>
            <img src={logo} alt="ADG Logo" />
            <h1>Keeper</h1>
        </header>
      </Link>
  );
}

export default Header;