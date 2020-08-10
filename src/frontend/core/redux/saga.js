import { all, fork } from 'redux-saga/effects';
import concat from 'lodash/concat';

import { rootSaga } from 'frontend/redux';

const allSagas = concat(
  rootSaga
);

export default function* appSagas() {
  yield all(allSagas.map(fork));
}
