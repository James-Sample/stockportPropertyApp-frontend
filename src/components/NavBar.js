import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="Navbar">
    <h1 className="navheader">SK Properties</h1>
    <ul className="navbar-links">
      <li className="navbar-links-item">
        <Link to="/">View Properties</Link>
      </li>
      <li className="navbar-links-item">
        <Link to="add-property">Add a Property</Link>
      </li>
      <li className="navbar-links-item">
        <Link to="map-page">Stockport Map</Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
