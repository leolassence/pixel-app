import {
  fork,
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import api from '../api';
import { searchSuccess } from '../actions/search';
import { parseError } from '../actions/errors';
import { SEARCH_ACTIONS } from '../constants';


function* search(action) {
  try {
    const { query } = action.payload;
    const { data } = yield call(api.search.search, {
      query
    });

    yield put(searchSuccess(data));
  } catch (e) {
    yield put(parseError({
      error: e.response.data.message,
    }));
  }
}

function* watchSearchRequest() {
  yield takeLatest(SEARCH_ACTIONS.SEARCH_REQUEST, search);
}


const searchSagas = [
  fork(watchSearchRequest),
];

export default searchSagas;
