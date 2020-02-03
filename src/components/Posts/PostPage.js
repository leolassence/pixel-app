import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostContainer from './PostContainer';

class PostPage extends Component {
  componentDidMount() {
    const {
      match: {
        params: { postId }
      },
      // isLoggedIn,
      getPost
    } = this.props;

    getPost(postId);
  }

  render() {
    return (
      <div className="container">
        <h1>This is the post page</h1>
        <PostContainer />
      </div>
    );
  }
}

PostPage.defaultProps = {
  post: {}
};

PostPage.propTypes = {
  // isLoggedIn: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  post: PropTypes.shape({}),
  getPost: PropTypes.func.isRequired
};


export default PostPage;
