import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isCurrentUserPost } from '../../helpers';

const PostAuthorActions = props => {
  const {
    post,
    isLoggedIn,
    deletePost,
    history,
  } = props;

  const handleClickDeletePost = () => deletePost(post._id, history);

  if (isLoggedIn && isCurrentUserPost(props)) {
    const windowMessage = 'Are you sure you wish to delete this post ?';

    // TODO fix <a href>
    return (
      <Fragment>
        <Link to={`/updatepost/${post._id}`}>
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
    _id: PropTypes.string,
  }).isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostAuthorActions;
