import React from "react";
import "../styles/pagination.css";
import PropTypes from "prop-types";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  // create array to hold all page numbers
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  // create container to diplay page number/controls
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            type="button"
            className="page-link"
            onClick={prevPage}
            href="#"
          >
            &#60;&#60; Previous
          </button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""}`}
          >
            <button
              type="button"
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="#"
            >
              {pgNumber}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            type="button"
            className="page-link"
            onClick={nextPage}
            href="#"
          >
            Next &#62;&#62;
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  nPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
