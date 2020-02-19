import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isOwner } from '../../helpers';

const PostAuthorActions = props => {
  const {
    post,
    isLoggedIn,
    deletePostRequest,
    history,
  } = props;

  const handleClickDeletePost = () => deletePostRequest(post.postId, history);

  if (isOwner(isLoggedIn, post.user.username)) {
    const windowMessage = 'Are you sure you wish to delete this post ?';

    return (
      <Fragment>
        <Link to={`/updatepost/${post.postId}`}>
          <span className="photo__icon">
            <i className="fa fa-edit" />
            &nbsp;
          </span>
        </Link>
        <button
          type="button"
          className="reset-button-link"
          onClick={() => { if (window.confirm(windowMessage)) handleClickDeletePost(); }}
        >
          <span className="photo__icon">
            <i className="fa fa-trash" />
            &nbsp;
          </span>
        </button>
      </Fragment>
    );
  }

  return null;
};

PostAuthorActions.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
  post: PropTypes.shape({
    postId: PropTypes.string,
    user: PropTypes.shape({
      username: PropTypes.string,
    }).isRequired,
  }).isRequired,
  deletePostRequest: PropTypes.func.isRequired,
};

export default PostAuthorActions;
