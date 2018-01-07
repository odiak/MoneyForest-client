import * as React from 'react';
import {LifecycleWrapper} from './LifecycleWrapper';

export const AccountList = (props) => (
  <LifecycleWrapper
    componentDidMount={() => {
      props.loadAccountsIfNotYet(props.accounts);
    }}
  >
    <div>
      <h2>Accounts</h2>
      <ul>{props.accounts.list.map((account) => <li key={account.id}>{account.name}</li>)}</ul>
    </div>
  </LifecycleWrapper>
);
