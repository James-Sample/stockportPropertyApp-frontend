import React from "react";
import PropTypes from "prop-types";
import "../styles/components/alert.css";

const Alert = ({ message, success }) => {
  if (!message) return null;
  return (
    <div className={`alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
