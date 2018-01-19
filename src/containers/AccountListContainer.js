import * as React from 'react';
import {connect} from 'react-redux';

import {loadAccounts} from '../actions';

import {LifecycleWrapper} from './LifecycleWrapper';
import {AccountList} from '../components/AccountList';

const stateToProps = ({accounts}, props) => ({accounts});
const dispatcherToProps = (dispatch, props) => ({
  loadAccounts() {
    dispatch(loadAccounts());
  },
});

export const AccountListContainer = connect(stateToProps, dispatcherToProps)(
  ({loadAccounts, ...props}) => {
    return (
      <LifecycleWrapper
        componentDidMount={() => {
          loadAccounts();
        }}
      >
        <AccountList {...props} />
      </LifecycleWrapper>
    );
  },
);
