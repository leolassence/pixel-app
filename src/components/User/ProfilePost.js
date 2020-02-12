import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfilePost = ({ post }) => (
  <Link to={`/post/${post._id}`} className="col-md-4 thumbnail profile-picture">
    <img
      src={post.coverImage}
      alt={post.title}
      className="profile-picture__picture"
    />
    <div className="profile-picture__overlay">
      <span className="profile-picture__number">
        <i className="fa fa-heart" />
        780
      </span>
      <span className="profile-picture__number">
        <i className="fa fa-comment" />
        139
      </span>
    </div>
  </Link>
);

ProfilePost.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfilePost;
