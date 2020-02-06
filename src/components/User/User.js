import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PostContainer } from '../Posts';

class Profile extends Component {
  componentDidMount() {
    const {
      match: {
        params: { username }
      },
      history
    } = this.props;

    const query = { username };
    const options = { limit: 5 };

    if (!username) history.push('/notfound');

    this.props.getUser({ username });
    this.props.getPosts(query, options);
  }

  renderUser() {
    const { user } = this.props;

    if (user) {
      return (
        <div>
          <h5>{user.username}</h5>
          <h5>{user.email}</h5>
        </div>
      );
    }

    return null;
  }

  renderPosts = () => {
    if (this.props.postList) {
      return this.props.postList.map(post => (
        <PostContainer
          key={post._id}
          post={post}
          history={this.props.history}
        />
    ));
  }

  return (<h1>Loading ...</h1>);
}

renderContentWhenLoggedIn() {
  if (this.props.isLoggedIn) {
    return (
      <p>
        This is my profile
      </p>
    );
  }

  return (
    <p>This is the profile of someone</p>
  );
}

render() {
  return (
    <main className="container" style={{ marginTop: '20px' }}>
      <div className="jumbotron">
        <h1>Profile page</h1>
        {this.renderUser()}
        {this.renderContentWhenLoggedIn()}
      </div>
      {this.renderPosts()}
    </main>
  );
}
}

Profile.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  getUser: PropTypes.func.isRequired,
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

export default Profile;
