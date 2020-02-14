import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileImageResolver from '../Common';

const SearchResultPost = props => {
  const { data } = props;

  return (
    <li className="people__person">
      <div className="people__column">
        <div className="people__avatar-container">
          <ProfileImageResolver
            profileImage={data.coverImage}
            imgClassName="people__avatar"
            imgAlt={data.title}
          />
        </div>
        <div className="people__info">
          <span className="people__username">{data.title}</span>
          <span className="people__full-name">{data.location}</span>
        </div>
      </div>
      <div className="people__column">
        <Link to={`/post/${data._id}`}>Check post</Link>
      </div>
    </li>
  );
};

SearchResultPost.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchResultPost;
