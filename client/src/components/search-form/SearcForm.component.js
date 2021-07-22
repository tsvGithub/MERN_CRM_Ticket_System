import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ handleChange, str }) => {
  return (
    <div className="form">
      <form action="">
        <label htmlFor="searchStr">Search:</label>
        <input type="search" name="searchStr" value={str} onChange={handleChange} placeholder="Search..." />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};

export default SearchForm;
