import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import imgLogo from '../../assets/images/navLogo.png';

class Header extends Component {
  renderAuthenticateLink = () => {
    if (this.props.isLoggedIn) {
      return [
        <Link key={1} to="/" href="explore.html" className="navigation__link">
          <i className="fa fa-compass" />
        </Link>,
        <Link key={2} to="/" href="notifications.html" className="navigation__link notif ">
          <i className="fa fa-heart" />
        </Link>,
        <Link key={3} to="/createpost" className="navigation__link">
          <i className="fa fa-plus" />
        </Link>,
        <Link
          key={4}
          to={`/user/${localStorage.getItem('username')}`}
          className="navigation__link"
        >
          <i className="fa fa-user" />
        </Link>,
        <Link
          key={5}
          to="/"
          className="navigation__link"
          type="button"
          onClick={() => this.props.signOutUser()}
        >
          <i className="fa fa-sign-out" />
        </Link>
      ];
    }
    return (
      <Link to="/signin" className="navigation__link">
        <i className="fa fa-sign-in" />
      </Link>
    );
  }

  render() {
    return (
      <nav className="navigation">
        <Link to="/">
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
