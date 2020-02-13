import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm';
import { isOwner } from '../../helpers';

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
      getUser,
      history,
    } = this.props;

    getUser({ username }).then(({ payload }) => {
      if (isOwner(true, payload.username)) {
        this.setState({
          editReady: true,
          user: payload
        });
      } else {
        this.setState({ editReady: false });
        history.push('/notfound');
      }
    });
  }

  handleSubmit = ({ data, formData }) => {
    const { history, updateUser } = this.props;
    const { user: { userId } } = this.state;

    updateUser({ userId, data, formData }, history);
  }

  render() {
    const { editReady, user } = this.state;

    if (editReady) {
      return (
        <UserForm
          handleSubmit={this.handleSubmit}
          user={user}
        />
      );
    }

    return null;
  }
}

UpdateUser.propTypes = {
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
