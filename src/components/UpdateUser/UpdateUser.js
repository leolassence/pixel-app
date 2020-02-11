import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm';

class UpdateUser extends Component {
  constructor(props) {
    super(props);

    this.state = { editReady: false };
  }

  componentDidMount() {
    const {
      match: {
        params: { username }
      },
      isLoggedIn,
      getUser
    } = this.props;

    getUser({ username }).then(({ payload }) => {
      if (isLoggedIn && payload.username === localStorage.getItem('username')) {
        this.setState({
          editReady: true,
          user: payload
        });
      } else {
        this.setState({ editReady: false });
        this.props.history.push('/notfound');
      }
    });
  }

  handleSubmit = ({ data, formData }) => {
    this.props.updateUser({
      userId: this.state.user.userId,
      data,
      formData
    }, this.props.history);
  }

  render() {
    if (this.state.editReady) {
      return (
        <UserForm
          handleSubmit={this.handleSubmit}
          user={this.state.user}
        />
      );
    }

    return null;
  }
}

UpdateUser.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};

export default UpdateUser;
