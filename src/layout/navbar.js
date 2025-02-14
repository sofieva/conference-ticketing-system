import React from "react";
import { Link } from "react-router-dom";
import logo from "../logohng.png";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="logo">
        <Link to="/" className="logo-link"><img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>

      {/* Centered navigation links */}
      <div className="centerNav">
        <ul>
          <li><Link to="/" className="nav-link">Events</Link></li>
          <li><Link to="/my-tickets" className="nav-link">My Tickets</Link></li>
          <li><Link to="/about-project" className="nav-link">About Project</Link></li>
        </ul>
      </div>

      {/* Right-aligned MY TICKETS button */}
      <div className="tickets">
        <Link to="/my-tickets" className="ticket-button">
          MY TICKETS <span className="arrow">→</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
