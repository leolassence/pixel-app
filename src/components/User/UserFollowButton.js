import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const UserFollowButton = props => {
  const handleClick = () => {
    const {
      userId,
      isLoggedIn,
      followUser,
    } = props;

    if (isLoggedIn) return followUser(userId);

    return true;
  };

  const isFollow = () => {
    const { followers } = props;
    const username = localStorage.getItem('username');

    if (_.includes(followers, username)) {
      return { className: 'btn-unfollow', label: 'Unfollow' };
    }

    return { className: 'btn-follow', label: 'Follow' };
  };

  return (
    <button
      type="button"
      className={`profile__button u-fat-text ${isFollow().className}`}
      onClick={handleClick}
    >
      <i className="fas fa-portrait" />
      {isFollow().label}
    </button>
  );
};

UserFollowButton.propTypes = {
  userId: PropTypes.string.isRequired,
  followers: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  followUser: PropTypes.func.isRequired,
};

export default UserFollowButton;
