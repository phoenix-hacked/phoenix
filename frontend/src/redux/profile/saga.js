import { call, put, takeEvery } from 'redux-saga/effects';
import {
  actions,
  updateProfileStoreData,
} from './actions';
import { requestGetProfileData, requestUpdateProfileData } from '../../api';

const mock_data = {
  first_name: "Nirdosh",
  last_name: "Gautam",
  email: "nrdshgtm@gmail.com",
  about_me: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  address: "Ghorahi-6, Dang",
  experience: {
    highest_education: "Bachelors in Computer Science",
    company: "CloudFactory",
    experience_years: "5",
  },
  social: {
    linkedin: "linkedin.np/nirdosh",
    github: "github.com/bats",
    twitter: "twitter.com/nirdosh17",
  },
  tags: ['AI']
};


export function* watchProfileDataInitiate() {
  yield takeEvery(actions.INITIATE_PROFILE_DATA, initiateProfileData);
}

export function* watchProfileDataUpdate() {
  yield takeEvery(actions.UPDATE_PROFILE_DATA, updateProfileData);
}

export function* initiateProfileData(action) {
  const { payload } = action;
  try {
    const profileData = yield call(requestGetProfileData, payload.userId);
    yield put(updateProfileStoreData(payload.userId, profileData));
  } catch (err) {
    yield put(updateProfileStoreData(payload.userId, mock_data));
  }
}

export function* updateProfileData(action) {
  const { payload } = action;
  try {
    const profileData = yield call(requestUpdateProfileData, payload);
    yield put(updateProfileStoreData(payload.userId, profileData));
  } catch (err) {
    // yield put(addCustomAttributeError());
  }
}
