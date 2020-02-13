import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserInfos from './UserInfos';
import UserRenderPosts from './UserRenderPosts';

class Profile extends Component {
  componentDidMount() {
    const {
      match: {
        params: { username }
      },
      history,
      getUser,
      getPosts,
    } = this.props;

    if (!username) history.push('/notfound');

    getUser({ username }).then(() => {
      getPosts({ userId: this.props.user.userId }, { limit: 12 });
    });
  }

render() {
  const { user, postList, history } = this.props;

  return (
    <main className="profile-container">
      <section className="profile">
        <UserInfos user={user} />
        <UserRenderPosts
          postList={postList}
          user={user}
          history={history}
        />
      </section>
    </main>
    );
  }
}

Profile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  getUser: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  user: PropTypes.shape({
    userId: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    profileImage: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
  postList: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    coverImag: PropTypes.string,
  })).isRequired,
};

export default Profile;
