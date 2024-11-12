import React from "react";

function Navbar() {
  return (
    <nav className="navbar" data-navbar>
      <ul className="navbar-list" style={{ display: "flex", gap: "20px" }}>
        <li className="navbar-item">
          <a href="/" className="navbar-link" data-nav-link>
            <i className="fas fa-home"></i> Manage Appointments
          </a>
        </li>
        <li className="navbar-item">
          <a href="barbers" className="navbar-link" data-nav-link>
            <i className="fas fa-tags"></i> Manage Barbers
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
