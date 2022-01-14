import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
      <Link to="/Welcome">
        <header>
            <img src="images/adglogo2 1.svg" alt="ADG Logo" />
            <h1>Keeper</h1>
        </header>
      </Link>
  );
}

export default Header;