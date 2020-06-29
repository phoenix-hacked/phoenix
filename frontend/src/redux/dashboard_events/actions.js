export const actions = {
  UPDATE_DASHBOARD_EVENT_STORE_DATA: 'UPDATE_DASHBOARD_EVENT_STORE_DATA',
  INITIATE_DASHBOARD_EVENT_DATA: 'INITIATE_DASHBOARD_EVENT_DATA',
  UPDATE_DASHBOARD_EVENT_DATA: 'UPDATE_DASHBOARD_EVENT_DATA',
};

export function updateEventStoreData(userId, eventData) {
  return {
    payload: {
      userId,
      eventData,
    },
    type: actions.UPDATE_DASHBOARD_EVENT_STORE_DATA,
  };
}

export function updateDashboardEventStoreData(dashboardEventData) {
  return {
    payload: {
      dashboardEventData,
    },
    type: actions.UPDATE_DASHBOARD_EVENT_STORE_DATA,
  };
}

export function updateEventData(userId, eventData) {
  console.log
  return {
    payload: {
      userId,
      eventData,
    },
    type: actions.UPDATE_DASHBOARD_EVENT_DATA,
  };
}

export function initiateDashboardEventData() {
  return {
    type: actions.INITIATE_DASHBOARD_EVENT_DATA,
  };
}
