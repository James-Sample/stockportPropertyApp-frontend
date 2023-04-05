import React from "react";
import PropTypes from "prop-types";
import "../styles/filters/postcode.css";
import postcodes from "../data/postcode.json";

const PostcodeFilter = ({ filterPostcode, setFilterPostcode }) => {
  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterPostcode, input.value];
      setFilterPostcode(state);
    } else {
      const state = filterPostcode.filter((val) => val !== input.value);
      setFilterPostcode(state);
    }
  };

  return (
    <div className="postcode-container">
      <h1 className="postcode-heading">Filter By Postcode</h1>
      <div className="postcode_container">
        {postcodes.map((postcode) => (
          <div className="postcode" key={postcode}>
            <input
              className="postcode_input"
              type="checkbox"
              value={postcode}
              onChange={onChange}
            />
            <p className="postcode_label">{postcode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

PostcodeFilter.propTypes = {
  filterPostcode: PropTypes.string.isRequired,
  setFilterPostcode: PropTypes.func.isRequired,
};

export default PostcodeFilter;
