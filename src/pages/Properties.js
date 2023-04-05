import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PropertyCard from "../components/PropertyCard";
import getData from "../requests/getData";
import "../styles/pages/properties.css";
import Pagination from "../components/Pagination";
import PostcodeFilter from "../filters/Postcode";
import SortFilter from "../filters/Sort";
import SearchFilter from "../filters/Search";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  // for filtering properties by location
  const [sort, setSort] = useState({ sort: "price", order: "desc" });
  const [filterPostcode, setFilterPostcode] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData(sort, filterPostcode, search, setProperties);
  }, [sort, filterPostcode, search]);

  // pagination functionality
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(12);
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  // images displayed on page
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    // eslint-disable-next-line comma-dangle
    indexOfLastProperty
  );
  // calculate number of pages
  const nPages = Math.ceil(properties.length / propertiesPerPage);

  return (
    <div className="properties-page">
      <div className="filter-bar">
        <PostcodeFilter
          filterPostcode={filterPostcode}
          setFilterPostcode={setFilterPostcode}
        />
        <SortFilter sort={sort} setSort={setSort} />
        <SearchFilter setSearch={setSearch} />
      </div>
      <div className="property-cards">
        {currentProperties.map((property) => (
          <div className="properties">
            <PropertyCard key={property._id} {...property} />
          </div>
        ))}
      </div>
      {nPages > 1 ? (
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        ``
      )}
    </div>
  );
};

Properties.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      type: PropTypes.string,
      bathrooms: PropTypes.string,
      bedrooms: PropTypes.string,
      price: PropTypes.string,
      city: PropTypes.string,
      email: PropTypes.string,
      // eslint-disable-next-line comma-dangle
    })
  ).isRequired,
};
export default Properties;
