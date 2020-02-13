import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostFormContainer from '../PostForm';

class CreatePost extends Component {
  handleSubmit = ({ data, formData }) => {
    const { createPost, history } = this.props;

    createPost({ data, formData }, history);
  }

  render() {
    return <PostFormContainer handleSubmit={this.handleSubmit} />;
  }
}

CreatePost.propTypes = {
  createPost: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default CreatePost;
