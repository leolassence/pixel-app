import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileImageResolver from '../Common';

const SearchResultUser = props => {
  const { data } = props;

  return (
    <li className="people__person">
      <div className="people__column">
        <div className="people__avatar-container">
          <ProfileImageResolver
            profileImage={data.profileImage}
            imgClassName="people__avatar"
            imgAlt={data.username}
          />
        </div>
        <div className="people__info">
          <span className="people__username">{data.username}</span>
          <span className="people__full-name">{data.name}</span>
        </div>
      </div>
      <div className="people__column">
        <Link to={`/user/${data.username}`}>Check Profile</Link>
      </div>
    </li>
  );
};

SearchResultUser.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchResultUser;
