import { actions } from './actions';

const initialState = {
  profile: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_PROFILE_STORE_DATA:
      return {...state, profile: action.payload.profileData};
    default:
      return state;
  }
};
