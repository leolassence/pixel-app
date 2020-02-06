import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from './PostForm';

class CreatePost extends Component {
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push('/signin');
    }
  }

  handleSubmit = ({ data, formData }) => {
    this.props.createPost({
      data,
      formData
    }, this.props.history);
  }

  render() {
    return <PostForm handleSubmit={this.handleSubmit} />;
  }
}

CreatePost.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  createPost: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default CreatePost;
