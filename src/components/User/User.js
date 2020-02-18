import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import UserInfos from './UserInfos';
import UserRenderPosts from './UserRenderPosts';

class Profile extends Component {
  constructor(props) {
    super(props);

    const {
      match: {
        params: { username }
      },
      getUserRequest,
      getPosts,
    } = this.props;

    getUserRequest({ username });
    // getPosts({ userId: user.userId }, { limit: 12 });

    getPosts({}, { limit: 12 });
  }

  componentDidMount() {
    // FIX userId: user.userId
  }

  shouldComponentRender() {
    const { user, postList } = this.props;
    return (postList && !_.isEmpty(user));
  }

  render() {
    if (this.shouldComponentRender()) {
      const {
        user,
        postList,
        history,
        followUserRequest,
        isLoggedIn,
      } = this.props;

      return (
        <main className="profile-container">
          <section className="profile">
            <UserInfos
              user={user}
              isLoggedIn={isLoggedIn}
              followUserRequest={followUserRequest}
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
  getUserRequest: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  followUserRequest: PropTypes.func.isRequired,
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
