import axios from 'axios';
import * as Constants from 'frontend/core/configs';

const instance = axios.create({
  baseURL: Constants.ENDPOINTS.BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
});

instance.interceptors.response.use(
  res => {
    return res;
  },
  (error, other) => {
    return error;
  }
);

export default instance;
