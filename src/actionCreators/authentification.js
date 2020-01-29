import axios from 'axios';

import { parseError } from './errors';

const API_ENDPOINT = 'http://localhost:8080';
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

function signInUser({ email, password }, history) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${API_ENDPOINT}/signIn`, {
        email,
        password
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);

      dispatch(setAuthentification(true));

      history.push('/');
    } catch (error) {
      dispatch(parseError(error.response.data.message));
    }
  };
}

function signUpUser({ email, username, password }, history) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${API_ENDPOINT}/signUp`, {
        email,
        username,
        password,
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);

      dispatch(setAuthentification(true));

      history.push('/');
    } catch (error) {
      dispatch(parseError(error.response.data.message));
    }
  };
}

function signOutUser() {
  return function (dispatch) {
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
