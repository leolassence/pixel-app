import { USER_ACTIONS } from '../constants';
import { parseError } from './errors';
import api from '../api';

function getUser({ username }) {
  return async dispatch => {
    try {
      const response = await api.users.getUser({ username });

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
      const { data: { imageId } } = await api.images.createImage({ formData });

      if (!imageId) return dispatch(parseError('Internal server Error Image not created'));

      const { data: { updatedUser } } = await api.users.updateUser({
        userId,
        imageId,
        data
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
      const { data } = await api.users.followUser({ userId });

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
