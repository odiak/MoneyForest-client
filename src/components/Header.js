import * as React from 'react';
import {Link} from 'react-router-dom';

export const Header = (props) => {
  const links = props.currentUser
    ? [
        <Link key="home" to="/">
          home
        </Link>,
      ]
    : [
        <Link key="login" to="/login">
          login
        </Link>,
        <Link key="register" to="/register">
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
