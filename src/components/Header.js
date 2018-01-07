import * as React from 'react';
import {Link} from 'react-router-dom';

const ItemsWhenLoggedIn = (props) => (
  <div>
    <Link key="home" to="/">
      home
    </Link>
  </div>
);

const ItemsWhenLoggedOut = (props) => (
  <div>
    <Link key="login" to="/login">
      login
    </Link>
    <Link key="register" to="/register">
      register
    </Link>
  </div>
);

export const Header = (props) => {
  const {currentUser} = props;

  if (!currentUser.isLoaded) return null;

  return (
    <div>
      <h1>MoneyForest</h1>
      {currentUser.isPresent ? <ItemsWhenLoggedIn {...props} /> : <ItemsWhenLoggedOut {...props} />}
    </div>
  );
};
