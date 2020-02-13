import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comments';

const PostRenderComments = props => {
  const { comments } = props;

  // TODO UID
  return comments.map(c => (
    <Comment
      key={Math.random().toString(36).substr(2, 9)}
      username={c.username}
      message={c.message}
    />
  ));
};

PostRenderComments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      message: PropTypes.string,
    })
  ),
};

export default PostRenderComments;
