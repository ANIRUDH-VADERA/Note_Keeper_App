import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p><i className="far fa-copyright"></i>  Apple Developers Group {year}</p>
    </footer>
  );
}

export default Footer;