import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PropertyCard from "../components/PropertyCard";
import Alert from "../components/Alert";
import getData from "../requests/getData";
import "../styles/properties.css";

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

  return (
    <div className="properties-page">
      <h2>Properties page</h2>
      <div className="property-cards">
        <Alert message={alert.message} success={alert.isSuccess} />
        {properties.map((property, i) => (
          <div className="properties" key={i}>
            <PropertyCard key={property._id} {...property} />
          </div>
        ))}
      </div>
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
    })
  ).isRequired,
};
export default Properties;
