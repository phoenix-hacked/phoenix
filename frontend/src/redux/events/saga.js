import { call, put, takeEvery } from 'redux-saga/effects';
import {
  actions,
  updateEventStoreData,
} from './actions';
import { requestGetEventData, requestUpdateEventData } from '../../api';

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


export function* watchEventDataInitiate() {
  yield takeEvery(actions.INITIATE_EVENT_DATA, initiateEventData);
}

export function* watchEventDataUpdate() {
  yield takeEvery(actions.UPDATE_EVENT_DATA, updateEventData);
}

export function* initiateEventData(action) {
  const { payload } = action;
  try {
    const eventData = yield call(requestGetEventData, payload.userId);
    yield put(updateEventStoreData(payload.userId, eventData));
  } catch (err) {
    yield put(updateEventStoreData(payload.userId, mock_data));
  }
}

export function* updateEventData(action) {
  const { payload } = action;
  try {
    const eventData = yield call(requestUpdateEventData, payload);
    yield put(updateEventStoreData(payload.userId, eventData));
  } catch (err) {
    // yield put(addCustomAttributeError());
  }
}
