import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PostContainer } from '../Posts';

class Home extends Component {
  componentDidMount() {
    const query = {};
    const options = { limit: 10 };

    this.props.getPosts(query, options);
  }

  renderPosts = () => {
    if (this.props.postList) {
      return this.props.postList.map(post => <PostContainer key={post._id} post={post} />);
    }

    return (<h1>Loading ...</h1>);
  }

  render() {
    return (
      <main className="container" style={{ marginTop: '20px' }}>
        <div className="jumbotron">
          <h1>Welcome on Pixel</h1>
        </div>
        {this.renderPosts()}
      </main>
    );
  }
}

Home.propTypes = {
  // isLoggedIn: PropTypes.bool.isRequired,
  getPosts: PropTypes.func.isRequired,
  postList: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    coverImag: PropTypes.string,
  })).isRequired,
};

export default Home;
