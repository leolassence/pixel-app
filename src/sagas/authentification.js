import {
  fork,
  takeLatest,
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';

import api from '../api';
import { setAuthentification } from '../actions/authentification';
import { parseError } from '../actions/errors';
import { AUTH_ACTIONS } from '../constants';

function* signInUser(action) {
  try {
    const { signInId, password, history } = action.payload;

    const response = yield call(api.authentification.signin, {
      signInId,
      password,
    });

    localStorage.setItem('token', response.data.token);
    localStorage.setItem('username', response.data.username);

    yield put(setAuthentification(true));
    // TODO replace maybe by "connected-react-router"
    yield history.push(`/user/${localStorage.getItem('username')}`);
  } catch (e) {
    yield put(parseError({
      error: e.response.data.message,
    }));
  }
}

function* watchSignInRequest() {
  yield takeLatest(AUTH_ACTIONS.SIGNIN_USER_REQUEST, signInUser);
}


function* signUpUser(action) {
  try {
    const {
      email,
      username,
      password,
      history,
    } = action.payload;

    const response = yield call(api.authentification.signup, {
      email,
      username,
      password,
    });

    localStorage.setItem('token', response.data.token);
    localStorage.setItem('username', response.data.username);

    yield put(setAuthentification(true));
    // TODO replace maybe by "connected-react-router"
    yield history.push(`/user/${localStorage.getItem('username')}`);
  } catch (e) {
    yield put(parseError({
      error: e.response.data.message,
    }));
  }
}

function* watchSignUpRequest() {
  yield takeLatest(AUTH_ACTIONS.SIGNUP_USER_REQUEST, signUpUser);
}


function* signOutUser(action) {
  try {
    yield put(setAuthentification(false));
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    // TODO replace maybe by "connected-react-router"
    yield action.payload.history.push('/');
  } catch (e) {
    yield put(parseError({
      error: e.response.data.message,
    }));
  }
}

function* watchSignOutRequest() {
  yield takeEvery(AUTH_ACTIONS.SIGNOUT_USER_REQUEST, signOutUser);
}

const authentificationSagas = [
  fork(watchSignInRequest),
  fork(watchSignUpRequest),
  fork(watchSignOutRequest),
];

export default authentificationSagas;
