import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfilePost from './ProfilePost';
import UserFirstRenderPanel from './UserFirstRenderPanel';

class UserRenderPosts extends Component {
  renderPosts = () => {
    const {
      postList,
      user,
      history
    } = this.props;

    if (postList) {
      if (!postList.length) return <UserFirstRenderPanel user={user} />;

      return postList.map(post => (
        <ProfilePost
          key={post.postId}
          post={post}
          history={history}
        />
      ));
    }

    // TODO replace by a loading component
    return (<h1>Loading ...</h1>);
  }

  render() {
    return (
      <div className="tab-content">
        <div className="profile__pictures row active" id="images" data-tab-content>
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

UserRenderPosts.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
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

export default UserRenderPosts;
