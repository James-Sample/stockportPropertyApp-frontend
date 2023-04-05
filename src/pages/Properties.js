import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PropertyCard from "../components/PropertyCard";
import Alert from "../components/Alert";
import getData from "../requests/getData";
import SideBar from "../components/Sidebar";
import "../styles/properties.css";
import Pagination from "../components/Pagination";
import axios from "axios";
// import filterPostcode from "../requests/filterPostcode";
// import FilterBar from "../components/FilterBar";
import PostcodeFilter from "../filters/Postcode";
import SortFilter from "../filters/Sort";
import SearchFilter from "../filters/Search";

const Properties = () => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [properties, setProperties] = useState([]);

  const [alert, setAlert] = useState(initialState.alert);
  // const { search } = useLocation();

  // useEffect(() => {
  //   getData(setProperties, setAlert);
  //   console.log(properties);
  // }, []);

  // for filtering properties by location

  // useEffect(() => {
  //   filterPostcode(search, setProperties);
  // }, [search]);

  const [obj, setobj] = useState({});
  const [sort, setSort] = useState({ sort: "price", order: "desc" });
  const [filterPostcode, setFilterPostcode] = useState([]);
  const [search, setSearch] = useState("");
  const base_url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getAllProperties = async () => {
      try {
        console.log("im here");
        const url = `${base_url}/getProperties?sort=${sort.sort},${
          sort.order
        }&postcode=${filterPostcode.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setobj(data);
        setProperties(data.propertyData);
        console.log(data);
        console.log(properties);
      } catch (err) {
        console.log(err);
      }
    };

    getAllProperties();
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
      <SideBar />
      <PostcodeFilter
        filterPostcode={filterPostcode}
        setFilterPostcode={setFilterPostcode}
      />
      <SortFilter sort={sort} setSort={setSort} />
      <SearchFilter setSearch={setSearch} />
      <h2>Properties page</h2>
      <div className="property-cards">
        <Alert message={alert.message} success={alert.isSuccess} />
        {currentProperties.map((property, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="properties" key={i}>
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
