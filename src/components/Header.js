import * as React from 'react';
import {Link} from './Link';

export const Header = (props) => {
  const links = props.currentUser
    ? [
        <Link key="home" to="/" parentProps={props}>
          home
        </Link>,
      ]
    : [
        <Link key="login" to="/login" parentProps={props}>
          login
        </Link>,
        <Link key="register" to="/register" parentProps={props}>
          register
        </Link>,
      ];

  return (
    <div>
      <h1>MoneyForest</h1>
      {links}
    </div>
  );
};
