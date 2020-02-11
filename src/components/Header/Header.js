import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import imgLogo from '../../assets/images/navLogo.png';

class Header extends Component {
  renderAuthenticateLink = () => {
    if (this.props.isLoggedIn) {
      return [
        <Link key={3} to="/createpost" className="navigation__link" title="Create Post">
          <i className="fa fa-plus" />
        </Link>,
        <Link
          key={4}
          to={`/user/${localStorage.getItem('username')}`}
          className="navigation__link"
          title="Profile"
        >
          <i className="fa fa-user" />
        </Link>,
        <Link
          key={5}
          to="/"
          className="navigation__link"
          type="button"
          title="Sign Out"
          onClick={() => this.props.signOutUser()}
        >
          <i className="fa fa-sign-out" />
        </Link>
      ];
    }
    return (
      <Link to="/signin" className="navigation__link" title="Sign In">
        <i className="fa fa-sign-in" />
      </Link>
    );
  }

  render() {
    return (
      <nav className="navigation">
        <Link to="/" title="Home">
          <img
            src={imgLogo}
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
          {this.renderAuthenticateLink()}
        </div>
      </nav>
    );
  }
}


Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  signOutUser: PropTypes.func.isRequired
};

export default Header;
