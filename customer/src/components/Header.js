import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="header-bottom" data-header>
        <div className="container">
          <a href="home" className="logo" style={{ marginRight: "20px" }}>
            CUTIT
          </a>
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
