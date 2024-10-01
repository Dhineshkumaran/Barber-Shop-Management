import React from "react";
import Navbar from "./Navbar";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-bottom" data-header>
        <div className="container">
          <a href="home" className="logo" style={{ marginRight: "20px" }}>
            Boys
          </a>
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
