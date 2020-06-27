export const actions = {
  UPDATE_PROFILE_STORE_DATA: 'UPDATE_PROFILE_STORE_DATA',
  INITIATE_PROFILE_DATA: 'INITIATE_PROFILE_DATA',
  UPDATE_PROFILE_DATA: 'UPDATE_PROFILE_DATA',
};

export function updateProfileStoreData(userId, profileData) {
  return {
    payload: {
      userId,
      profileData,
    },
    type: actions.UPDATE_PROFILE_STORE_DATA,
  };
}

export function updateProfileData(userId, profileData) {
  return {
    payload: {
      userId,
      profileData,
    },
    type: actions.UPDATE_PROFILE_DATA,
  };
}

export function initiateProfileData(userId) {
  return {
    payload: {
      userId
    },
    type: actions.INITIATE_PROFILE_DATA,
  };
}
