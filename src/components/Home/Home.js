import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostContainer from '../Posts';

class Home extends Component {
  componentDidMount() {
    const { getPostsRequest } = this.props;

    getPostsRequest({ query: {}, options: { limit: 10 } });
  }

  renderPosts = () => {
    const { postList, history } = this.props;

    if (postList) {
      return postList.map(post => (
        <PostContainer
          key={post.postId}
          post={post}
          history={history}
        />
      ));
    }

    return (<h1>Loading ...</h1>);
  }

  render() {
    return (
      <main className="feed">
        {this.renderPosts()}
      </main>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({}).isRequired,
  getPostsRequest: PropTypes.func.isRequired,
  postList: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    coverImag: PropTypes.string,
    user: PropTypes.shape({
      username: PropTypes.string,
      profileImage: PropTypes.string,
    }).isRequired,
  })).isRequired,
};

export default Home;
