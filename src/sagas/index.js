import { all } from 'redux-saga/effects';
import { watchCounter } from './counter';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchCounter() /* , another saga here */]);
}
