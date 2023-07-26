import React from 'react';
import PropTypes from 'prop-types';
import c from './Filter.module.css';

export const Filter = ({ value, onFilter }) => {
  return (
    <label className={c.filterLabel}>
      <p className={c.filterTitle}>Find contacts by name</p>
      <input
        className={c.filterInput}
        value={value}
        name="filter"
        onChange={onFilter}
        type="input"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
