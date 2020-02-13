import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { Comment } from '../Comments';

const PostRenderComments = props => {
  const { comments } = props;

  return comments.map(c => (
    <Comment
      key={uid(c)}
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
