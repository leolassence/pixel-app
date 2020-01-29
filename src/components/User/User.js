import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  componentDidMount() {
    const {
      match: {
        params: { username }
      },
      history
    } = this.props;

    if (!username) history.push('/notfound');

    this.props.getUser({ username });
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
      </main>
    );
  }
}

Profile.defaultProps = {
  user: {
    username: ''
  }
};

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
  }),
  getUser: PropTypes.func.isRequired
};

export default Profile;
