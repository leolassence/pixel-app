import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderAuthenticateLinks from './HeaderAuthenticateLinks';
import logo from '../../assets/images/logo.png';

const Header = props => {
  const { isLoggedIn, signOutUser } = props;

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
      <div className="navigation__search-container">
        <i className="fa fa-search" />
        <input type="text" placeholder="Search" />
      </div>
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
  signOutUser: PropTypes.func.isRequired
};

export default Header;
