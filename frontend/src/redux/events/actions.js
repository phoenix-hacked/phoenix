export const actions = {
  UPDATE_EVENT_STORE_DATA: 'UPDATE_EVENT_STORE_DATA',
  INITIATE_EVENT_DATA: 'INITIATE_EVENT_DATA',
  UPDATE_EVENT_DATA: 'UPDATE_EVENT_DATA',
};

export function updateEventStoreData(userId, eventData) {
  return {
    payload: {
      userId,
      eventData,
    },
    type: actions.UPDATE_EVENT_STORE_DATA,
  };
}

export function updateEventData(userId, eventData) {
  console.log
  return {
    payload: {
      userId,
      eventData,
    },
    type: actions.UPDATE_EVENT_DATA,
  };
}

export function initiateEventData(userId) {
  return {
    payload: {
      userId
    },
    type: actions.INITIATE_EVENT_DATA,
  };
}
