import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Navbar">
      <h1>Stockport Property App</h1>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
