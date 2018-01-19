import {create as createAxios} from 'axios';

const axios = createAxios({
  baseURL: '/api',
});
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('MONEYFOREST_API_TOKEN');
  if (token) {
    config.headers['X-MoneyForest-Auth-Token'] = token;
  }
  return config;
});

export function fetchCurrentUser() {
  return axios.get('/users/me');
}

export function login(params) {
  return axios.post('/users/login', params);
}

export function register(params) {
  return axios.post('/users', params);
}

export function fetchAccounts() {
  return axios.get('/accounts');
}
