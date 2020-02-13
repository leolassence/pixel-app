import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostContainer from '../Posts';

class PostPage extends Component {
  componentDidMount() {
    const {
      match: {
        params: { postId }
      },
      getPost,
      history,
    } = this.props;

    getPost(postId, history);
  }

  renderPost = () => {
    const { post, history } = this.props;

    if (Object.entries(post).length !== 0) {
      return <PostContainer post={post} history={history} />;
    }

    return (<h1>Loading ...</h1>);
  }

  render() {
    return (
      <main className="feed">
        {this.renderPost()}
      </main>
    );
  }
}

PostPage.propTypes = {
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
