import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfilePost from './ProfilePost';

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

  renderPosts = () => {
    if (this.props.postList) {
      return this.props.postList.map(post => (
        <ProfilePost
          key={post._id}
          post={post}
          history={this.props.history}
        />
    ));
  }

  return (<h1>Loading ...</h1>);
}

render() {
  const { user } = this.props;
  return (
    <main className="profile-container">
      <section className="profile">
        <header className="profile__header">
          <div className="profile__avatar-container">
            <img
              src={user.profileImage}
              className="profile__avatar"
              alt="user img"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title">{user.username}</h1>
              <Link to={`/user/edit/${user.username}`} className="profile__button u-fat-text">Edit profile</Link>
            </div>
            <ul className="profile__numbers">
              <li className="profile__posts">
                <span className="profile__number u-fat-text">10</span>
                &nbsp;posts
              </li>
              <li className="profile__followers">
                <span className="profile__number u-fat-text">40</span>
                &nbsp;followers
              </li>
              <li className="profile__following">
                <span className="profile__number u-fat-text">134</span>
                &nbsp;following
              </li>
            </ul>
            <div className="profile__bio">
              <span className="profile__full-name u-fat-text">{user.name}</span>
              <br />
              <br />
              <p className="profile__full-bio">{user.bio}</p>
              <br />
              <br />
            </div>
          </div>
        </header>
        <div className="tab-content">
          <div className="profile__pictures row active" id="images" data-tab-content>
            {this.renderPosts()}
          </div>
        </div>
      </section>
    </main>
    );
  }
}

Profile.propTypes = {
  // isLoggedIn: PropTypes.bool.isRequired,
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
    username: PropTypes.string,
    name: PropTypes.string,
    profileImage: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
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
