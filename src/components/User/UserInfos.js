import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileImageResolver from '../Common';
import UserFollowButton from './UserFollowButton';

const UserInfos = ({ isLoggedIn, user, followUserRequest }) => (
  <header className="profile__header">
    <div className="profile__avatar-container">
      <ProfileImageResolver
        profileImage={user.profileImage}
        imgClassName="profile__avatar"
        imgAlt={user.username}
      />
    </div>
    <div className="profile__info">
      <div className="profile__name">
        <h1 className="profile__title">{user.username}</h1>
        <Link to={`/user/edit/${user.username}`} className="profile__button u-fat-text">Edit profile</Link>
        <UserFollowButton
          isLoggedIn={isLoggedIn}
          userId={user.userId}
          followers={user.followers}
          followUserRequest={followUserRequest}
        />
      </div>
      <ul className="profile__numbers">
        <li className="profile__posts">
          <span className="profile__number u-fat-text">{user.postsCount}</span>
          &nbsp;posts
        </li>
        <li className="profile__followers">
          <span className="profile__number u-fat-text">{user.followersCount}</span>
          &nbsp;followers
        </li>
        <li className="profile__following">
          <span className="profile__number u-fat-text">{user.followingCount}</span>
          &nbsp;following
        </li>
      </ul>
      <div className="profile__bio">
        <span className="profile__full-name u-fat-text">{user.name}</span>
        <br />
        <br />
        <p className="profile__full-bio">{user.bio}</p>
        <br />
        <br />
        <a href={user.website} target="_blank" rel="noopener noreferrer" className="profile__link u-fat-text">{user.website}</a>
      </div>
    </div>
  </header>
);

UserInfos.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  followUserRequest: PropTypes.func.isRequired,
  user: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    username: PropTypes.string,
    name: PropTypes.string,
    profileImage: PropTypes.string,
    bio: PropTypes.string,
    postsCount: PropTypes.number,
    website: PropTypes.string,
    followersCount: PropTypes.number.isRequired,
    followingCount: PropTypes.number.isRequired,
    followers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default UserInfos;
