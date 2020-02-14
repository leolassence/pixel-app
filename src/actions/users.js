import axios from 'axios';
import { USER_ACTIONS } from '../constants';
import { parseError } from './errors';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

function getUser({ username }) {
  return async dispatch => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/users`, {
        params: { username }
      });

      return dispatch({
        type: USER_ACTIONS.GET_USER,
        payload: response.data
      });
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

function updateUser({ userId, formData, data }, history) {
  return async dispatch => {
    try {
      const requestConfig = {
        headers: {
          authorization: localStorage.getItem('token')
        },
      };

      const { data: { imageId } } = await axios({
        method: 'post',
        ...requestConfig,
        url: `${API_ENDPOINT}/images`,
        data: formData,
      });

      if (!imageId) return dispatch(parseError('Internal server Error Image not created'));

      const { data: { updatedUser } } = await axios({
        method: 'put',
        ...requestConfig,
        url: `${API_ENDPOINT}/users/${userId}`,
        data: {
          ...data,
          imageId
        }
      });

      if (!updatedUser) return dispatch(parseError('Internal server Error'));

      dispatch({
        type: USER_ACTIONS.UPDATE_USER,
        payload: updatedUser
      });

      return history.push(`/user/${updatedUser.username}`);
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

function followUser(userId) {
  return async dispatch => {
    try {
      const { data } = await axios({
        method: 'put',
        headers: {
          authorization: localStorage.getItem('token')
        },
        url: `${API_ENDPOINT}/users/follow/${userId}`
      });

      if (!data.followedUser) return dispatch(parseError('Internal server Error'));

      return dispatch({
        type: USER_ACTIONS.FOLLOW_USER,
        payload: data.followedUser,
      });
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}


export {
  getUser,
  updateUser,
  followUser,
};
