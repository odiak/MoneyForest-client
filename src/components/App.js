import * as React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';

import {Header} from './Header';
import {Login} from './Login';
import {Registration} from './Registration';
import {Home} from './Home';
import {NewTransaction} from './NewTransaction';
import {NewAccount} from './NewAccount';
import {AccountList} from './AccountList';
import {NotFound} from './NotFound';

function bindProps(Component, props) {
  return (p) => <Component {...props} {...p} />;
}

const RoutesWhenLoggedIn = (props) => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Redirect from="/login" to="/" />
    <Redirect from="/register" to="/" />
    <Route path="/transactions/new" exact render={bindProps(NewTransaction, props)} />
    <Route path="/accounts" exact render={bindProps(AccountList, props)} />
    <Route path="/accounts/new" exact render={bindProps(NewAccount, props)} />
    <Route component={NotFound} />
  </Switch>
);

const RoutesWhenLoggedOut = (props) => (
  <Switch>
    <Route path="/login" render={bindProps(Login, props)} />
    <Route path="/register" render={bindProps(Registration, props)} />
    <Redirect to="/login" />
  </Switch>
);

export const App = (props) => {
  const {history, currentUser} = props;

  if (!currentUser.isLoaded) return null;

  return (
    <Router history={history}>
      <div>
        <Header {...props} />

        {currentUser.isPresent ? (
          <RoutesWhenLoggedIn {...props} />
        ) : (
          <RoutesWhenLoggedOut {...props} />
        )}
      </div>
    </Router>
  );
};
