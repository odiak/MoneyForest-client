import * as React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions';

import {LifecycleWrapper} from './LifecycleWrapper';
import {App} from '../components/App';

const stateToProps = ({currentUser}, props) => ({
  currentUser,
});
const dispatcherToProps = (dispatch, props) => ({
  loadCurrentUser() {
    dispatch(actions.loadCurrentUser());
  },
});

export const AppContainer = connect(stateToProps, dispatcherToProps)(
  ({history, currentUser, loadCurrentUser}) => {
    return (
      <LifecycleWrapper
        componentDidMount={() => {
          loadCurrentUser();
        }}
      >
        <App history={history} currentUser={currentUser} />
      </LifecycleWrapper>
    );
  },
);
