import React from "react";

function Navbar() {
  return (
    <nav className="navbar" data-navbar>
      <ul className="navbar-list" style={{ display: "flex", gap: "20px" }}>
        <li className="navbar-item">
          <a href="home" className="navbar-link" data-nav-link>
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="services" className="navbar-link" data-nav-link>
            <i className="fas fa-tags"></i> Services
          </a>
        </li>
        <li className="navbar-item">
          <a href="offers" className="navbar-link" data-nav-link>
            <i className="fas fa-gift"></i> Offers
          </a>
        </li>
        <li className="navbar-item">
          <a href="appointment" className="navbar-link" data-nav-link>
            <i className="fas fa-calendar-check"></i> Appointment
          </a>
        </li>
        <li className="navbar-item">
          <a href="about" className="navbar-link" data-nav-link>
            <i className="fas fa-info-circle"></i> About
          </a>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
