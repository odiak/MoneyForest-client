import * as React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';

import {Header} from './Header';
import {Login} from './Login';
import {Registration} from './Registration';
import {Home} from './Home';
import {NotFound} from './NotFound';

const RoutesWhenLoggedIn = (props) => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Redirect from="/login" to="/" />
    <Redirect from="/register" to="/" />
    <Route component={NotFound} />
  </Switch>
);

const RoutesWhenLoggedOut = (props) => (
  <Switch>
    <Route path="/login" render={(p) => <Login {...props} {...p} />} />
    <Route path="/register" component={Registration} />
    <Redirect to="/login" />
  </Switch>
);

export const App = (props) => {
  const {history} = props;

  return (
    <Router history={history}>
      <div>
        <Header {...props} />

        {props.currentUser ? <RoutesWhenLoggedIn {...props} /> : <RoutesWhenLoggedOut {...props} />}
      </div>
    </Router>
  );
};
