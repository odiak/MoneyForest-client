import {AppDispatcher} from './AppDispatcher';
import {AppActionTypes} from './AppActionTypes';
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

function dispatch(type, payload) {
  AppDispatcher.dispatch({type, payload});
}

export const AppActions = {
  increment() {
    dispatch(AppActionTypes.INCREMENT);
  },

  decrement() {
    dispatch(AppActionTypes.DECREMENT);
  },

  updateRegistrationUserName(value) {
    dispatch(AppActionTypes.UPDATE_REGISTRATION_USER_NAME, value);
  },
  updateRegistrationEmail(value) {
    dispatch(AppActionTypes.UPDATE_REGISTRATION_EMAIL, value);
  },
  updateRegistrationPassword(value) {
    dispatch(AppActionTypes.UPDATE_REGISTRATION_PASSWORD, value);
  },

  register({userName, email, password}) {
    axios
      .post('/users', {name: userName, email, password})
      .then((res) => {
        console.log(res);
        localStorage.setItem('MONEYFOREST_API_TOKEN', res.data.token);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  },

  updateLoginEmail(value) {
    dispatch(AppActionTypes.UPDATE_LOGIN_EMAIL, value);
  },
  updateLoginPassword(value) {
    dispatch(AppActionTypes.UPDATE_LOGIN_PASSWORD, value);
  },

  login({email, password}) {
    axios
      .post('/users/login', {email, password})
      .then((res) => {
        console.log(res);
        localStorage.setItem('MONEYFOREST_API_TOKEN', res.data.token);
        dispatch(AppActionTypes.LOGIN_SUCCEEDED, res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  },

  loadCurrentUser() {
    axios
      .get('/users/me')
      .then((res) => {
        console.log(res);
        dispatch(AppActionTypes.SET_CURRENT_USER, res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        dispatch(AppActionTypes.UNSET_CURRENT_USER);
      });
  },
};
