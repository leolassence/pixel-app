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

import { getPostsSuccess } from '../actions/posts';
import api from '../api';
import { parseError } from '../actions/errors';
import { USER_ACTIONS } from '../constants';


function* getUser(action) {
  try {
    const { username } = action.payload;

    const response = yield call(api.users.getUser, {
      username,
    });

    yield put(getUserSuccess(response.data));
  } catch (e) {
    yield put(parseError({
      error: e.response.data.message,
    }));
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
    yield put(parseError({
      error: e.response.data.message,
    }));
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
    yield put(parseError({
      error: e.response.data.message,
    }));
  }
}

function* watchFollowUserRequest() {
  yield takeLatest(USER_ACTIONS.FOLLOW_USER_REQUEST, followUser);
}


function* getUserPosts(action) {
  try {
    const { username, options } = action.payload;

    const user = yield call(api.users.getUser, {
      username,
    });

    const posts = yield call(api.posts.getPosts, {
      query: { userId: user.data.userId },
      options,
    });

    yield put(getUserSuccess(user.data));
    yield put(getPostsSuccess(posts.data));
  } catch (e) {
    yield put(parseError({
      error: e.response.data.message,
    }));
  }
}

function* watchGetUserPostsRequest() {
  yield takeLatest(USER_ACTIONS.GET_USER_POSTS_REQUEST, getUserPosts);
}

const usersSagas = [
  fork(watchGetUserRequest),
  fork(watchUpdateUserRequest),
  fork(watchFollowUserRequest),
  fork(watchGetUserPostsRequest),
];

export default usersSagas;
