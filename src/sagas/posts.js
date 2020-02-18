import {
  fork,
  takeEvery,
  takeLatest,
  call,
  put,
  take,
} from 'redux-saga/effects';

import {
  getPostsSuccess,
  getPostSuccess,
  createPostSuccess,
  updatePostSuccess,
  deletePostSuccess,
  likePostSuccess,
} from '../actions/posts';

import api from '../api';

import { POST_ACTIONS } from '../constants';

function* getPosts(action) {
  try {
    const { query, options } = action.payload;

    const { data } = yield call(api.posts.getPosts, {
      query,
      options,
    });

    yield put(getPostsSuccess(data));
  } catch (e) {
    console.log('E', e);
  }
}

function* watchGetPostsRequest() {
  yield takeEvery(POST_ACTIONS.GET_POSTS_REQUEST, getPosts);
}


function* getPost(action) {
  try {
    const { postId, history } = action.payload;

    const { data } = yield call(api.posts.getPost, {
      postId,
      history,
    });

    yield put(getPostSuccess(data));
  } catch (e) {
    console.log('E', e);
  }
}

function* watchGetPostRequest() {
  yield takeEvery(POST_ACTIONS.GET_POST_REQUEST, getPost);
}


function* createPost(action) {
  try {
    const { formData, data, history } = action.payload;

    const { data: { imageId } } = yield call(api.images.createImage, {
      formData,
    });

    const { data: { createdPost } } = yield call(api.posts.createPost, {
      data,
      imageId,
    });

    yield put(createPostSuccess(createdPost));

    yield history.push(`/post/${createdPost.postId}`);
  } catch (e) {
    console.log('E', e);
  }
}

function* watchCreatePostRequest() {
  yield takeLatest(POST_ACTIONS.CREATE_POST_REQUEST, createPost);
}


function* updatePost(action) {
  try {
    const {
      postId,
      formData,
      data,
      history
    } = action.payload;

    const { data: { imageId } } = yield call(api.images.createImage, {
      formData,
    });

    const { data: { updatedPost } } = yield call(api.posts.updatePost, {
      data,
      imageId,
      postId
    });

    yield put(updatePostSuccess(updatedPost));

    yield history.push(`/post/${updatedPost.postId}`);
  } catch (e) {
    console.log('E', e);
  }
}

function* watchUpdatePostRequest() {
  yield takeLatest(POST_ACTIONS.UPDATE_POST_REQUEST, updatePost);
}


function* deletePost({ postId, history }) {
  try {
    const { data: { deletedPostId } } = yield call(api.posts.deletePost, {
      postId
    });

    yield put(deletePostSuccess(deletedPostId));

    yield history.push('/');
  } catch (e) {
    console.log('E', e);
  }
}

function* watchDeletePostRequest() {
  while (true) {
    const action = yield take(POST_ACTIONS.DELETE_POST_REQUEST, deletePost);

    const {
      postId,
      history
    } = action.payload;

    yield call(deletePost, {
      postId,
      history,
    });
  }
}


function* likePost(action) {
  try {
    const { postId } = action.payload;

    const { data: { likedPost } } = yield call(api.posts.likePost, {
      postId,
    });

    yield put(likePostSuccess(likedPost));
  } catch (e) {
    console.log('E', e);
  }
}

function* watchLikePostRequest() {
  yield takeLatest(POST_ACTIONS.LIKE_POST_REQUEST, likePost);
}


const postsSagas = [
  fork(watchGetPostsRequest),
  fork(watchGetPostRequest),
  fork(watchCreatePostRequest),
  fork(watchUpdatePostRequest),
  fork(watchDeletePostRequest),
  fork(watchLikePostRequest),
];

export default postsSagas;
