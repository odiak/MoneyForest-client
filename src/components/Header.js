import * as React from 'react';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const ItemsWhenLoggedIn = (props) => (
  <Fragment>
    <Link to="/">home</Link>
    <Link to="/accounts">accounts</Link>
    <Link to="/transactions/new">new transaction</Link>
  </Fragment>
);

const ItemsWhenLoggedOut = (props) => (
  <Fragment>
    <Link to="/login">login</Link>
    <Link to="/register">register</Link>
  </Fragment>
);

export const Header = (props) => {
  const {currentUser} = props;

  if (!currentUser.isLoaded) return null;

  return (
    <div className="Header">
      <h1>MoneyForest</h1>
      <div className="Header-navigation-items">
        {currentUser.isPresent ? (
          <ItemsWhenLoggedIn {...props} />
        ) : (
          <ItemsWhenLoggedOut {...props} />
        )}
      </div>
    </div>
  );
};
