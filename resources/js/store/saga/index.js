import { takeEvery, put } from 'redux-saga/effects';
import * as types from '../actions/types';

function* testHandler () {
  console.log('test_action is caught');
  yield put({ type: types.TEST_ACTION_HANDLED, payload: []});
}

export default function* () {
  yield takeEvery(types.TEST_ACTION, testHandler);
}
