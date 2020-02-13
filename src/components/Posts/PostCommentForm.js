import React from 'react';
import PropTypes from 'prop-types';
import { CommentFormContainer } from '../Comments';

const PostCommentForm = props => {
  const { isLoggedIn, postId } = props;

  if (isLoggedIn) return <CommentFormContainer postId={postId} />;

  return null;
};

PostCommentForm.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  postId: PropTypes.string.isRequired,
};

export default PostCommentForm;
