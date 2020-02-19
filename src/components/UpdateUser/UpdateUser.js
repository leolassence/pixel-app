import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import UserForm from './UserForm';
// import { isOwner } from '../../helpers';

class UpdateUser extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { editReady: false };
  // }

  componentDidMount() {
    const {
      match: {
        params: { username }
      },
      getUserRequest,
      // user,
      // history,
    } = this.props;

    getUserRequest({ username });

    // FIX
    // .then(({ payload }) => {
    //   if (isOwner(true, payload.username)) {
    //     this.setState({
    //       editReady: true,
    //       user: payload
    //     });
    //   } else {
    //     this.setState({ editReady: false });
    //     history.push('/notfound');
    //   }
    // });
  }

  handleSubmit = ({ data, formData }) => {
    const { history, updateUserRequest } = this.props;
    const { user: { userId } } = this.props;

    updateUserRequest({ userId, data, formData }, history);
  }

  render() {
    // const { editReady, user } = this.state;
    const { user } = this.props;

    if (!_.isEmpty(user)) {
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
  user: PropTypes.shape({
    userId: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  updateUserRequest: PropTypes.func.isRequired,
  getUserRequest: PropTypes.func.isRequired,
};

export default UpdateUser;
