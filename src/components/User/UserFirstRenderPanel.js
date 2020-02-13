import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserFirstRenderPanel = ({ user }) => (
  <div className="jumbotron">
    <h1>Welcome to your profile !</h1>
    <hr className="my-4" />
    <p className="lead">
      <Link to={`/user/edit/${user.username}`} role="button">
        - Edit your profile
      </Link>
    </p>
    <br />
    <p className="lead">
      <Link to="/createpost" role="button">
        - Share your first post
      </Link>
    </p>
  </div>
);

UserFirstRenderPanel.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
};

export default UserFirstRenderPanel;
