/* eslint react/prop-types: 0 */
import React from "react";
import PropTypes from "prop-types";
import "../styles/filters/sort.css";

const SortFilter = ({ sort, setSort }) => {
  const onSelectChange = ({ currentTarget: input }) => {
    setSort({ sort: input.value, order: sort.order });
  };

  const onArrowChange = () => {
    if (sort.order === "asc") {
      setSort({ sort: sort.sort, order: "desc" });
    } else {
      setSort({ sort: sort.sort, order: "asc" });
    }
  };

  return (
    <div className="sort-container">
      <h1 className="sort-heading">Sort By:</h1>
      <select
        onChange={onSelectChange}
        className="select-box"
        defaultValue={sort.sort}
      >
        <option value="price">Price</option>
        <option value="bedrooms">Beds</option>
      </select>
      <button className="arrow_btn" onClick={onArrowChange} type="button">
        <p className="up_arrow">&uarr;</p>
        <p className="down_arrow">&darr;</p>
      </button>
    </div>
  );
};

SortFilter.propTypes = {
  sort: PropTypes.number.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default SortFilter;
