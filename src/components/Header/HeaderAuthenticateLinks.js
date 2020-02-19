import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderAuthenticateLinks = props => {
  if (props.isLoggedIn) {
    return (
      <Fragment>
        <Link
          to="/createpost"
          className="navigation__link"
          title="Create Post"
        >
          <i className="fa fa-plus" />
        </Link>
        <Link
          to={`/user/${localStorage.getItem('username')}`}
          className="navigation__link"
          title="Profile"
        >
          <i className="fa fa-user" />
        </Link>
        <Link
          to="/"
          className="navigation__link"
          type="button"
          title="Sign Out"
          onClick={() => props.signOutUserRequest({
            history: props.history
          })}
        >
          <i className="fa fa-sign-out" />
        </Link>
      </Fragment>
    );
  }

  return (
    <Link to="/signin" className="navigation__link" title="Sign In">
      <i className="fa fa-sign-in" />
    </Link>
  );
};

HeaderAuthenticateLinks.propTypes = {
  history: PropTypes.shape({}).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  signOutUserRequest: PropTypes.func.isRequired
};

export default HeaderAuthenticateLinks;
