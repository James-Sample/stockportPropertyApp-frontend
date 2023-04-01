import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
// import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import Alert from "../components/Alert";
import getData from "../requests/getData";
import SideBar from "../components/Sidebar";
import "../styles/properties.css";
import Pagination from "../components/Pagination";
// import filterPostcode from "../requests/filterPostcode";

const Properties = () => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [properties, setProperties] = useState([]);

  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    getData(setProperties, setAlert);
  }, []);

  // // for filtering properties by location
  // const { search } = useLocation();

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4000/getProperties${search}`)
  //     .then(({ data }) => {
  //       setProperties(data.propertyData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [search]);

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
