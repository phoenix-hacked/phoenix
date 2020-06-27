import axios from 'axios';

const API_BASE_PATH=process.env.REACT_APP_BASE_API_URL;

export const requestGetProfileData = async (userId) => {
  console.log('called');
  const response = await axios.get(`${API_BASE_PATH}/user/${userId}/profile`);
  return response.data;
}

export const requestUpdateProfileData = async (payload) => {
  const { userId, userData } = payload;
  const response = await axios.put(`${API_BASE_PATH}/user/${userId}/profile`, userData);
  return response.data;
};
