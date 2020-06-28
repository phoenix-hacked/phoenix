import { actions } from './actions';

const initialState = {
  event: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_EVENT_STORE_DATA:
      return {...state, event: action.payload.eventData};
    default:
      return state;
  }
};
