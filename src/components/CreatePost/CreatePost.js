import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import PostForm from '../PostForm';

class CreatePost extends Component {
  componentDidMount() {
    const { getUserRequest } = this.props;
    const username = localStorage.getItem('username');

    getUserRequest({ username });
  }

  handleSubmit = ({ data, formData }) => {
    const { createPostRequest, history } = this.props;

    createPostRequest({ data, formData, history });
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
  createPostRequest: PropTypes.func.isRequired,
  getUserRequest: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    profileImage: PropTypes.string,
  }).isRequired,
};

export default CreatePost;
