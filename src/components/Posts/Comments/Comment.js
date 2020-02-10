import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => (
  <li className="photo__comment">
    <span className="photo__comment-author">{props.username}</span>
    {props.message}
  </li>
);

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Comment;
