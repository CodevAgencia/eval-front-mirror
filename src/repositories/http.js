import axios from 'axios';

export const post = (url, body, headers) => {
  return axios.post(url, body, headers);
};

export const get = (url, headers) => {
  return axios.get(url, headers);
};
