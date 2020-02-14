import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  const {
    location,
    history,
    search,
  } = props;

  const handleChange = e => {
    if (location.pathname !== '/search') history.push('/search');

    return search(String(e.target.value));
  };

  return (
    <div className="navigation__search-container">
      <i className="fa fa-search" />
      <input type="text" placeholder="Search" onChange={e => handleChange(e)} />
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
};

export default Search;
