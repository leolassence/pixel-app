import { USER_ACTIONS } from '../constants';

export const getUserRequest = ({ username }) => ({
  type: USER_ACTIONS.GET_USER_REQUEST,
  payload: {
    username
  },
});

export const getUserSuccess = data => ({
  type: USER_ACTIONS.GET_USER_SUCCESS,
  payload: data,
});

export const updateUserRequest = ({ userId, formData, data }, history) => ({
  type: USER_ACTIONS.UPDATE_USER_REQUEST,
  payload: {
    userId,
    formData,
    data,
    history,
  },
});

export const updateUserSuccess = data => ({
  type: USER_ACTIONS.UPDATE_USER_SUCCESS,
  payload: data,
});

export const followUserRequest = userId => ({
  type: USER_ACTIONS.FOLLOW_USER_REQUEST,
  payload: {
    userId,
  },
});

export const followUserSuccess = data => ({
  type: USER_ACTIONS.FOLLOW_USER_SUCCESS,
  payload: data,
});
