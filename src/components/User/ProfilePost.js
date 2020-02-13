import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfilePost = ({ post }) => (
  <Link to={`/post/${post.postId}`} className="col-md-4 thumbnail profile-picture">
    <img
      src={post.coverImage}
      alt={post.title}
      className="profile-picture__picture"
    />
    <div className="profile-picture__overlay">
      <span className="profile-picture__number">
        <i className="fa fa-heart" />
        {post.likeCount}
      </span>
      <span className="profile-picture__number">
        <i className="fa fa-comment" />
        {post.commentCount}
      </span>
    </div>
  </Link>
);

ProfilePost.propTypes = {
  post: PropTypes.shape({
    postId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    })
  }).isRequired,
};

export default ProfilePost;
