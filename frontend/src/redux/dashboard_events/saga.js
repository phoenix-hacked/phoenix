import { call, put, takeEvery } from 'redux-saga/effects';
import {
  actions,
  updateDashboardEventStoreData,
} from './actions';
import { requestGetDashboardEventData, requestUpdateDashboardEventData } from '../../api';

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


export function* watchDashboardEventDataInitiate() {
  yield takeEvery(actions.INITIATE_DASHBOARD_EVENT_DATA, initiateDashboardEventData);
}

export function* watchDashboardEventDataUpdate() {
  yield takeEvery(actions.UPDATE_DASHBOARD_EVENT_DATA, updateDashboardEventData);
}

export function* initiateDashboardEventData(action) {
  const { payload } = action;
  try {
    const eventData = yield call(requestGetDashboardEventData);
    yield put(updateDashboardEventStoreData(eventData));
  } catch (err) {
    yield put(updateDashboardEventStoreData(mock_data));
  }
}

export function* updateDashboardEventData(action) {
  const { payload } = action;
  try {
    const eventData = yield call(requestUpdateDashboardEventData, payload);
    yield put(updateDashboardEventStoreData(payload.userId, eventData));
  } catch (err) {
    // yield put(addCustomAttributeError());
  }
}
