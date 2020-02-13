import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import PostForm from '../PostForm';

class CreatePost extends Component {
  componentDidMount() {
    const { getUser } = this.props;
    const username = localStorage.getItem('username');

    getUser({ username });
  }

  handleSubmit = ({ data, formData }) => {
    const { createPost, history } = this.props;

    createPost({ data, formData }, history);
  }

  shouldComponentRender() {
    const { user } = this.props;

    return !_.isEmpty(user);
  }

  render() {
    const { user } = this.props;

    if (this.shouldComponentRender()) {
      return (
        <PostForm
          handleSubmit={this.handleSubmit}
          user={user}
        />
      );
    }

    return null;
  }
}

CreatePost.propTypes = {
  createPost: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    profileImage: PropTypes.string,
  }).isRequired,
};

export default CreatePost;
