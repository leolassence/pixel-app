import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import PostForm from '../PostForm';
import { isOwner } from '../../helpers';

class UpdatePost extends Component {
  componentDidMount() {
    const {
      match: {
        params: { postId }
      },
      history,
      getPostRequest,
    } = this.props;

    getPostRequest(postId, history);
  }

  handleSubmit = ({ data, formData }) => {
    const {
      history,
      updatePostRequest,
      post: { postId },
    } = this.props;

    updatePostRequest({ postId, data, formData }, history);
  }

  shouldComponentRender() {
    const { post, history } = this.props;

    if (!_.isEmpty(post)) {
      if (!isOwner(true, post.user.username)) history.push('/notfound');
      return true;
    }

    return false;
  }

  render() {
    const { post } = this.props;

    if (this.shouldComponentRender()) {
      return (
        <PostForm
          handleSubmit={this.handleSubmit}
          post={post}
          user={post.user}
        />
      );
    }

    return null;
  }
}

UpdatePost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  updatePostRequest: PropTypes.func.isRequired,
  getPostRequest: PropTypes.func.isRequired,
  post: PropTypes.shape({
    postId: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    coverImage: PropTypes.string,
    user: PropTypes.shape({
      username: PropTypes.string,
      profileImage: PropTypes.string,
    }),
  }).isRequired,
};

export default UpdatePost;
