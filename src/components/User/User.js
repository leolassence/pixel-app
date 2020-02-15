import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
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

    getUser({ username }).then(({ payload }) => {
      getPosts({ userId: payload.userId }, { limit: 12 });
    });
  }

  shouldComponentRender() {
    const { postList, user } = this.props;
    return (postList && !_.isEmpty(user));
  }

  render() {
    const {
      user,
      postList,
      history,
      followUser,
      isLoggedIn,
    } = this.props;

    if (this.shouldComponentRender()) {
      return (
        <main className="profile-container">
          <section className="profile">
            <UserInfos
              user={user}
              isLoggedIn={isLoggedIn}
              followUser={followUser}
            />
            <UserRenderPosts
              postList={postList}
              user={user}
              history={history}
            />
          </section>
        </main>
      );
    }

    return null;
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
  getUser: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  followUser: PropTypes.func.isRequired,
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
