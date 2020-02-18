import { all } from 'redux-saga/effects';
import searchSagas from './search';
import commentsSagas from './comments';

export default function* rootSaga() {
  yield all([
    ...searchSagas,
    ...commentsSagas
  ]);
}
