import * as React from 'react';
import {connect} from 'react-redux';

import {updateAccountDraft, createNewAccount} from '../actions';

import {NewAccount} from '../components/NewAccount';

const stateToProps = ({accountDraft}, props) => ({accountDraft});
const dispatcherToProps = (dispatch, props) => ({
  updateAccountDraft(key, value) {
    dispatch(updateAccountDraft(key, value));
  },
  createNewAccount() {
    dispatch(createNewAccount());
  },
});

export const NewAccountContainer = connect(stateToProps, dispatcherToProps)((props) => {
  return <NewAccount {...props} />;
});
