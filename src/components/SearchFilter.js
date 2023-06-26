import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const SearchFilter = ({ query, setQuery }) => (
  <div className="p-2 my-2">
    <input
      type="search"
      value={query}
      placeholder="Search for a country..."
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-3 rounded-md border shadow-md shadow-slate-300 text-lg focus:outline-none"
    />
  </div>
);

SearchFilter.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchFilter;
