import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfilePost from './ProfilePost';
import userImg from '../../assets/images/user.png';

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
  return (
    <main className="profile-container">
      <section className="profile">
        <header className="profile__header">
          <div className="profile__avatar-container">
            <img
              src={userImg}
              className="profile__avatar"
              alt="user img"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title">Rich_Geek</h1>
              <Link to={`/user/edit/${this.props.user.username}`} className="profile__button u-fat-text">Edit profile</Link>
              <span style={{ fontSize: '1.5em', color: 'grey', }}>
                <i className="fa fa-cog" id="cog" />
              </span>
            </div>
            <ul className="profile__numbers">
              <li className="profile__posts">
                <span className="profile__number u-fat-text">10</span>
                posts
              </li>
              <li className="profile__followers">
                <span className="profile__number u-fat-text">40</span>
                followers
              </li>
              <li className="profile__following">
                <span className="profile__number u-fat-text">134</span>
                following
              </li>
            </ul>
            <div className="profile__bio">
              <span className="profile__full-name u-fat-text">Loyd RG Tafireyi</span>
              <br />
              <br />
              <p className="profile__full-bio">Ut enim ad minim veniam, quis nostrud exercition ni.</p>
              <br />
              <br />
              <a href="#" target="_blank" className="profile__link u-fat-text"> toto.fr </a>
            </div>
          </div>
        </header>

        <div className="tab-content">
          <div className="profile__pictures active" id="images" data-tab-content>
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
