import { all, call, put, takeEvery } from 'redux-saga/effects';

// import { saveUserSession, saveUserSessionError, actions } from '../actions/userSession';
// import { requestUserSession } from '../api';
import { watchProfileDataInitiate, watchProfileDataUpdate } from './redux/profile/saga';
// function* userSession() {
//   yield takeEvery(actions.REQUEST_USER_SESSION, initializeSession);
// }

// function* initializeSession() {
//   try {
//     const res = yield call(requestUserSession);
//     yield put(saveUserSession(res));
//   } catch (error) {
//     yield put(saveUserSessionError());
//   }
// }

export default function* initializer() {
  yield all([watchProfileDataInitiate(), watchProfileDataUpdate()]);
}