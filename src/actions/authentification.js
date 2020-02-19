import { AUTH_ACTIONS } from '../constants';

export const setAuthentification = isLoggedIn => ({
  type: AUTH_ACTIONS.SET_AUTHENTIFICATIONS,
  payload: isLoggedIn,
});

export const signInUserRequest = ({ signInId, password, history }) => ({
  type: AUTH_ACTIONS.SIGNIN_USER_REQUEST,
  payload: {
    signInId,
    password,
    history,
  },
});

export const signUpUserRequest = ({
  email,
  username,
  password,
  history,
}) => ({
  type: AUTH_ACTIONS.SIGNUP_USER_REQUEST,
  payload: {
    email,
    username,
    password,
    history,
  },
});

export const signOutUserRequest = ({ history }) => ({
  type: AUTH_ACTIONS.SIGNOUT_USER_REQUEST,
  payload: {
    history,
  },
});
