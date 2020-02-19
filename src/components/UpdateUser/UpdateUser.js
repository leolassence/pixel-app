import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import UserForm from './UserForm';
import { isOwner } from '../../helpers';

class UpdateUser extends Component {
  componentDidMount() {
    const {
      match: {
        params: { username }
      },
      getUserRequest,
    } = this.props;

    getUserRequest({ username });
  }

  handleSubmit = ({ data, formData }) => {
    const { history, updateUserRequest } = this.props;
    const { user: { userId } } = this.props;

    updateUserRequest({
      userId,
      data,
      formData,
      history
    });
  }

  render() {
    const { user, history } = this.props;

    if (!_.isEmpty(user)) {
      if (isOwner(true, user.username)) {
        return (
          <UserForm
            handleSubmit={this.handleSubmit}
            user={user}
          />
        );
      }

      history.push('/notfound');
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
  user: PropTypes.shape({
    userId: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  updateUserRequest: PropTypes.func.isRequired,
  getUserRequest: PropTypes.func.isRequired,
};

export default UpdateUser;
