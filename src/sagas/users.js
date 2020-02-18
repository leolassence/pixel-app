import {
  fork,
  takeEvery,
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import {
  getUserSuccess,
  updateUserSuccess,
  followUserSuccess
} from '../actions/users';

import api from '../api';
import { USER_ACTIONS } from '../constants';


function* getUser(action) {
  try {
    const { username } = action.payload;

    const response = yield call(api.users.getUser, {
      username,
    });

    yield put(getUserSuccess(response.data));
  } catch (e) {
    console.log('E', e);
  }
}

function* watchGetUserRequest() {
  yield takeEvery(USER_ACTIONS.GET_USER_REQUEST, getUser);
}


function* updateUser(action) {
  try {
    const {
      userId,
      formData,
      data,
      history,
    } = action.payload;

    const { data: { imageId } } = yield call(api.images.createImage, {
      formData,
    });

    const { data: { updatedUser } } = yield call(api.users.updateUser, {
      userId,
      imageId,
      data
    });

    yield put(updateUserSuccess(updatedUser));

    yield history.push(`/user/${localStorage.getItem('username')}`);
  } catch (e) {
    console.log('E', e);
  }
}

function* watchUpdateUserRequest() {
  yield takeLatest(USER_ACTIONS.UPDATE_USER_REQUEST, updateUser);
}


function* followUser(action) {
  try {
    const { userId } = action.payload;

    const { data: { followedUser } } = yield call(api.users.followUser, {
      userId,
    });

    yield put(followUserSuccess(followedUser));
  } catch (e) {
    console.log('E', e);
  }
}

function* watchFollowUserRequest() {
  yield takeLatest(USER_ACTIONS.FOLLOW_USER_REQUEST, followUser);
}


const usersSagas = [
  fork(watchGetUserRequest),
  fork(watchUpdateUserRequest),
  fork(watchFollowUserRequest),
];


export default usersSagas;
