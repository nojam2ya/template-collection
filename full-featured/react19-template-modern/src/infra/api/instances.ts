import * as axios from 'axios';

export const AxiosAuthInstance = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {},
});

export const AxiosInstance = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {},
});
