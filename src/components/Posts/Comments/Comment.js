import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => <p>{`${props.username}: ${props.message}`}</p>;

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Comment;
