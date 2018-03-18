import axios from 'axios';
import { isEmpty } from 'lodash';
import { getApiUrl } from './utils';

// API URL
const apiUrl = process.env.API_URL;

axios.interceptors.response.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

// Handle GET requests
export const getJSON = async route => {
  try {
    const response = await axios.get(`${apiUrl}${route}`);
    return response.data;
  } catch (err) {
    return err;
  }
}

// Handle POST requests
export const postJSON = async (route, body = {}) => {
  try {
    if (isEmpty(body)) {
      const response = await axios.post(`${apiUrl}${route}`);
      return response.data;
    } else {
      const response = await axios.post(`${apiUrl}${route}`, body);
      return response.data;
    }
  } catch (err) {
    return err;
  }
}