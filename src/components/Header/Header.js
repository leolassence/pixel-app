import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderAuthenticateLinks from './HeaderAuthenticateLinks';
import logo from '../../assets/images/logo.png';
import { Search } from '../Search';

const Header = props => {
  const {
    isLoggedIn,
    signOutUser,
    searchRequest,
    location,
    history,
  } = props;

  return (
    <nav className="navigation">
      <Link to="/" title="Home">
        <img
          src={logo}
          alt="logo"
          title="logo"
          className="navigation__logo"
        />
      </Link>
      <Search
        location={location}
        history={history}
        searchRequest={searchRequest}
      />
      <div className="navigation__icons">
        <HeaderAuthenticateLinks
          isLoggedIn={isLoggedIn}
          signOutUser={signOutUser}
        />
      </div>
    </nav>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  signOutUser: PropTypes.func.isRequired,
  searchRequest: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
};

export default Header;
