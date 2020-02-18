import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const PostLike = props => {
  const handleClick = () => {
    const {
      postId,
      isLoggedIn,
      likePostRequest,
    } = props;

    if (isLoggedIn) return likePostRequest(postId);

    return true;
  };

  const isLiked = () => {
    const { likes } = props;
    const username = localStorage.getItem('username');

    return _.includes(likes, username) ? 'heart-red' : '';
  };

  return (
    <button
      type="button"
      className="reset-button-link"
      onClick={handleClick}
    >
      <span className="photo__icon">
        <i className={`fa fa-heart heart ${isLiked()}`} />
        &nbsp;
      </span>
    </button>
  );
};

PostLike.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  postId: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(PropTypes.string).isRequired,
  likePostRequest: PropTypes.func.isRequired,
};

export default PostLike;
