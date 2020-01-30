import axios from 'axios';

import { parseError } from './errors';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const AUTH_ACTIONS = {
  SET_AUTHENTIFICATIONS: 'SET_AUTHENTIFICATIONS',
  PARSE_MESSAGE: 'PARSE_MESSAGE',
};

function setAuthentification(isLoggedIn) {
  return {
    type: AUTH_ACTIONS.SET_AUTHENTIFICATIONS,
    payload: isLoggedIn
  };
}

function signInUser({ signInId, password }, history) {
  return async dispatch => {
    try {
      const response = await axios.post(`${API_ENDPOINT}/signIn`, {
        signInId,
        password
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
      const response = await axios.post(`${API_ENDPOINT}/signUp`, {
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
  AUTH_ACTIONS,
  setAuthentification,
  signInUser,
  signUpUser,
  signOutUser
};
