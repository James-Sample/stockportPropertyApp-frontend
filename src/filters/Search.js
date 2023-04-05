import React from "react";
import PropTypes from "prop-types";
import "../styles/filters/search.css";

const SearchFilter = ({ setSearch }) => (
  <div className="search-function">
    <h1 className="search-heading">Search Title:</h1>
    <input
      type="text"
      className="search-box"
      placeholder="e.g. Romiley"
      onChange={({ currentTarget: input }) => setSearch(input.value)}
    />
  </div>
);

SearchFilter.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default SearchFilter;
