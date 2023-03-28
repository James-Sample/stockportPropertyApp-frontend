import React from "react";
import PropTypes from "prop-types";
import "../styles/propertycard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faSterlingSign,
  faEnvelope,
  faHouse,
  faCity,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({
  title,
  postcode,
  type,
  bathrooms,
  bedrooms,
  price,
  email,
}) => (
  <div className="property-card">
    <div className="property-title">{title}</div>
    <div className="property-city">
      <FontAwesomeIcon icon={faCity} className="city-icon" />
      {postcode}
    </div>
    <div className="property-type">
      <FontAwesomeIcon icon={faHouse} className="type-icon" />
      {type}
    </div>
    <div className="beds-baths">
      <div className="property-bedrooms">
        <FontAwesomeIcon icon={faBed} className="bed-icon" />
        {bedrooms}
      </div>
      <div className="property-bathrooms">
        <FontAwesomeIcon icon={faBath} className="bath-icon" />
        {bathrooms}
      </div>
    </div>
    <div className="property-price">
      <FontAwesomeIcon icon={faSterlingSign} className="price-icon" />
      {price}
    </div>
    <div className="property-email">
      <a href={`mailto:${email}`} className="email-link">
        <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
        Contact
      </a>
    </div>
  </div>
);

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
