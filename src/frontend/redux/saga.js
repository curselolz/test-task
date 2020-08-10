import { takeLatest, put } from 'redux-saga/effects';

import * as actions from './actions';
import data from '../../backend/data.json'

function* fetchAllImages({payload}) {
  try {
    const response = data;
    yield put(actions.getAllImages.success(response));
  } catch (ex) {
    yield put(actions.getAllImages.failure(ex));
  } 
}

export default function* ordersCombineSagas() {
  yield takeLatest(actions.getAllImages.request, fetchAllImages);
}
