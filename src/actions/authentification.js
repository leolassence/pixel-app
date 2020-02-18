import api from '../api';
import { AUTH_ACTIONS } from '../constants';
import { parseError } from './errors';

function setAuthentification(isLoggedIn) {
  return {
    type: AUTH_ACTIONS.SET_AUTHENTIFICATIONS,
    payload: isLoggedIn
  };
}

function signInUser({ signInId, password }, history) {
  return async dispatch => {
    try {
      const response = await api.authentification.signin({
        signInId,
        password,
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);

      dispatch(setAuthentification(true));

      return history.push(`/user/${localStorage.getItem('username')}`);
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

function signUpUser({ email, username, password }, history) {
  return async dispatch => {
    try {
      const response = await api.authentification.signup({
        email,
        username,
        password,
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);

      dispatch(setAuthentification(true));

      return history.push(`/user/${localStorage.getItem('username')}`);
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

function signOutUser() {
  return dispatch => {
    dispatch(setAuthentification(false));
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };
}

export {
  setAuthentification,
  signInUser,
  signUpUser,
  signOutUser
};
