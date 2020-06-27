import { call, put, takeEvery } from 'redux-saga/effects';
import {
  actions,
  updateProfileStoreData,
} from './actions';
import { requestGetProfileData, requestUpdateProfileData } from '../../api';

export function* watchProfileDataInitiate() {
  yield takeEvery(actions.INITIATE_PROFILE_DATA, initiateProfileData);
}

export function* watchProfileDataUpdate() {
  yield takeEvery(actions.UPDATE_PROFILE_DATA, updateProfileData);
}

export function* initiateProfileData(action) {
  console.log('asdfasdf');
  const { payload } = action;
  try {
    const profileData = yield call(requestGetProfileData(payload));
    yield put(updateProfileStoreData(profileData));
  } catch (err) {
    // yield put(addCustomAttributeError());
  }
}

export function* updateProfileData(action) {
  const { payload } = action;
  try {
    const profileData = yield call(requestUpdateProfileData(payload));
    yield put(updateProfileStoreData(profileData));
  } catch (err) {
    // yield put(addCustomAttributeError());
  }
}
