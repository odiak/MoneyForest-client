import * as React from 'react';
import {connect} from 'react-redux';

import {updateLoginDraft, login} from '../actions';

import {Login} from '../components/Login';

const stateToProps = ({loginDraft}, props) => ({loginDraft});
const dispatcherToProps = (dispatch, props) => ({
  updateLoginDraft(key, value) {
    dispatch(updateLoginDraft(key, value));
  },
  login() {
    dispatch(login());
  },
});

export const LoginContainer = connect(stateToProps, dispatcherToProps)((props) => (
  <Login {...props} />
));
