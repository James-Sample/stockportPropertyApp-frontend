import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faBath,
  // faBed,
  faSterlingSign,
  faMagnifyingGlass,
  // faHouse,
  faCity,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  // for combining queries on the URL
  const { search } = useLocation();
  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  // functionality for title search form
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };

  return (
    <div className="side-bar">
      <ul className="filters">
        <li className="search-title">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="fa title-icon" />
          <h2 className="filter-title">Search By Title</h2>
          <form className="title-search-form" onSubmit={handleSearch}>
            <input
              type="text"
              id="search-box"
              title="search-box"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. victorian"
            />
            <button type="submit" className="title-search-button">
              Submit
            </button>
          </form>
        </li>
        <li className="city-filter">
          <FontAwesomeIcon icon={faCity} className="fa city-icon" />
          <h2 className="filter-title">Filter by city</h2>
          <ul className="city-links">
            <li className="city-links-item">
              <Link to={buildQueryString("query", { city: "Manchester" })}>
                Manchester
              </Link>
            </li>
            <li className="city-links-item">
              <Link to={buildQueryString("query", { city: "Leeds" })}>
                Leeds
              </Link>
            </li>
            <li className="city-links-item">
              <Link to={buildQueryString("query", { city: "Liverpool" })}>
                Liverpool
              </Link>
            </li>
            <li className="city-links-item">
              <Link to={buildQueryString("query", { city: "Sheffield" })}>
                Sheffield
              </Link>
            </li>
          </ul>
        </li>

        <li className="sort-price">
          <FontAwesomeIcon icon={faSterlingSign} className="fa price-icon" />
          <h2 className="filter-title">Sort By Price</h2>
          <ul className="price-links">
            <li className="price-links-item">
              <Link to={buildQueryString("sort", { price: 1 })}>
                Ascending Price
              </Link>
            </li>
            <li className="price-links-item">
              <Link to={buildQueryString("sort", { price: -1 })}>
                Descending Price
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
