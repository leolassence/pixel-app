import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileImageResolver from '../Common';

const UserInfos = ({ user }) => (
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
      </div>
      <ul className="profile__numbers">
        <li className="profile__posts">
          <span className="profile__number u-fat-text">10</span>
          &nbsp;posts
        </li>
        <li className="profile__followers">
          <span className="profile__number u-fat-text">40</span>
          &nbsp;followers
        </li>
        <li className="profile__following">
          <span className="profile__number u-fat-text">134</span>
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
      </div>
    </div>
  </header>
);

UserInfos.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    profileImage: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

export default UserInfos;
