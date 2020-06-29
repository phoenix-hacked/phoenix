import { actions } from './actions';

const initialState = {
  dashboardEvent: [],
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actions.UPDATE_DASHBOARD_EVENT_STORE_DATA:
      return {dashboardEvent: action.payload.dashboardEventData};
    default:
      return state;
  }
};
