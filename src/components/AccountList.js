import * as React from 'react';
import {Link} from 'react-router-dom';

export const AccountList = (props) => (
  <div>
    <h2>Accounts</h2>
    <Link to="/accounts/new">create new account</Link>
    <ul>{props.accounts.list.map((account) => <li key={account.id}>{account.name}</li>)}</ul>
  </div>
);
