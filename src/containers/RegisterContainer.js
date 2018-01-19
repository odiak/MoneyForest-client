import * as React from 'react';
import {connect} from 'react-redux';

import {updateRegistrationDraft, register} from '../actions';
import {Registration} from '../components/Registration';

const stateToProps = ({registrationDraft}, props) => ({registrationDraft});
const dispatcherToProps = (dispatch, props) => ({
  updateRegistrationDraft(key, value) {
    dispatch(updateRegistrationDraft(key, value));
  },
  register() {
    dispatch(register());
  },
});

export const RegisterContainer = connect(stateToProps, dispatcherToProps)((props) => (
  <Registration {...props} />
));
