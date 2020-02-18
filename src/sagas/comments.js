import {
  fork,
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';

import api from '../api';
import { parseError } from '../actions/errors';
import { createCommentSuccess } from '../actions/comments';
import { COMMENT_ACTIONS } from '../constants';

function* createComment(action) {
  try {
    const { postId, message } = action.payload;
    const { data: { updatedPost } } = yield call(api.comments.createComment, {
      postId,
      message,
    });

    yield put(createCommentSuccess(updatedPost));
  } catch (e) {
    yield put(parseError({
      error: e.response.data.message,
    }));
  }
}

function* watchCommentRequest() {
  yield takeLatest(COMMENT_ACTIONS.CREATE_COMMENT_REQUEST, createComment);
}

const commentsSagas = [
  fork(watchCommentRequest),
];

export default commentsSagas;
