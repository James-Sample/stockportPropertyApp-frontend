import React from "react";
import "../styles/components/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="Navbar">
    <h1 className="navheader">SK Properties</h1>
    <ul className="navbar-links">
      <li className="navbar-links-item">
        <Link to="/" className="link">
          View Properties
        </Link>
      </li>
      <li className="navbar-links-item">
        <Link to="add-property" className="link">
          Add a Property
        </Link>
      </li>
      <li className="navbar-links-item">
        <Link to="map-page" className="link">
          Stockport Map
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
