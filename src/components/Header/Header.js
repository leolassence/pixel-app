import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class Header extends Component {
  renderAuthenticateLink = () => {
    if (this.props.isLoggedIn) {
      return [
        <li key={1} className="nav-item">
          <Link
            to={`/user/${localStorage.getItem('username')}`}
            className="nav-link"
          >
            Profile
          </Link>
        </li>,
        <li key={2} className="nav-item">
          <Link
            to="/"
            className="nav-link"
            type="button"
            onClick={() => this.props.signOutUser()}
          >
            Sign Out
          </Link>
        </li>
      ];
    }
    return [
      <li key={3} className="nav-item">
        <Link to="/signin" className="nav-link">Sign In</Link>
      </li>,
      <li key={4} className="nav-item">
        <Link to="/signup" className="nav-link">Sign Up</Link>
      </li>
    ];
  }

  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
          </ul>
          <ul className="navbar-nav my-2 my-lg-0">
            {this.renderAuthenticateLink()}
          </ul>
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
