import axios from 'axios';

const API_BASE_PATH=process.env.REACT_APP_BACKEND_SERVICE;

export const requestGetProfileData = async (userId) => {
  const response = await axios.get(`${API_BASE_PATH}/users/${userId}`);
  return response.data;
}

export const requestUpdateProfileData = async (payload) => {
  const { userId, profileData } = payload;
  const response = await axios.put(`${API_BASE_PATH}/users/${userId}`, profileData);
  return response.data;
};
