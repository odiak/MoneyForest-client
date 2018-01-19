import {delay} from 'redux-saga';
import {put, select, call, takeEvery} from 'redux-saga/effects';

import * as actions from '../actions';
import * as api from '../api';

function* loadCurrentUser() {
  try {
    const result = yield call(api.fetchCurrentUser);
    console.log(result);
    yield put({type: actions.CURRENT_USER_LOADED, payload: result.data});
  } catch (error) {
    console.log(error);
    yield put({type: actions.CURRENT_USER_FAILED_TO_LOAD});
  }
}

function* login() {
  try {
    const {email, password} = yield select(({loginDraft}) => loginDraft);
    const result = yield call(api.login, {email, password});
    yield put({type: actions.LOGIN_SUCCEEDED, payload: result.data});
    localStorage.MONEYFOREST_API_TOKEN = result.data.token;
  } catch (error) {
    yield put({type: actions.LOGIN_FAILED});
  }
}

function* register() {
  try {
    const {userName, email, password} = yield select(({registrationDraft}) => registrationDraft);
    const result = yield call(api.register, {name: userName, email, password});
    yield put({type: actions.REGISTRATION_SUCCEEDED, payload: result.data});
    localStorage.MONEYFOREST_API_TOKEN = result.data.token;
  } catch (error) {
    yield put({type: actions.REGISTRATION_FAILED});
  }
}

function* loadAccounts({payload: {force}}) {
  const {isLoaded} = yield select(({accounts}) => accounts);
  if (force) {
    yield put({type: actions.CLEAR_ACCOUNTS});
  } else if (isLoaded) {
    return;
  }

  try {
    const result = yield call(api.fetchAccounts);
    console.log(result);
    yield put({
      type: actions.ACCOUNTS_LOADED,
      payload: {
        hasNext: result.data.hasNext,
        list: result.data.accounts,
      },
    });
  } catch (error) {}
}

export function* rootSaga() {
  yield takeEvery(actions.LOAD_CURRENT_USER, loadCurrentUser);
  yield takeEvery(actions.LOGIN, login);
  yield takeEvery(actions.REGISTER, register);
  yield takeEvery(actions.LOAD_ACCOUNTS, loadAccounts);
}
