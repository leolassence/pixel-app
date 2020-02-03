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

  renderPost = () => {
    if (this.props.post) {
      return <PostContainer post={this.props.post} />;
    }

    return (<h1>Loading ...</h1>);
  }

  render() {
    return (
      <div className="container">
        <h1>This is the post page</h1>
        {this.renderPost()}
      </div>
    );
  }
}

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
  getPost: PropTypes.func.isRequired,
  post: PropTypes.shape({}).isRequired,
};


export default PostPage;
