import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import UserInfos from './UserInfos';
import UserRenderPosts from './UserRenderPosts';

class User extends Component {
  componentDidMount() {
    const {
      match: {
        params: { username }
      },
      getUserPostsRequest,
    } = this.props;

    getUserPostsRequest({
      username,
      query: {},
      options: { limit: 12 },
    });
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

User.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  getUserPostsRequest: PropTypes.func.isRequired,
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

export default User;
