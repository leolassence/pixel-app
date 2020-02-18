import { all } from 'redux-saga/effects';
import searchSagas from './search';
import commentsSagas from './comments';
import authentificationSagas from './authentification';
import usersSagas from './users';

export default function* rootSaga() {
  yield all([
    ...searchSagas,
    ...commentsSagas,
    ...authentificationSagas,
    ...usersSagas,
  ]);
}
