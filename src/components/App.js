import * as React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions';

import {Header} from './Header';
import {Home} from './Home';
import {NotFound} from './NotFound';
import {AccountListContainer} from '../containers/AccountListContainer';
import {NewAccountContainer} from '../containers/NewAccountContainer';
import {LoginContainer} from '../containers/LoginContainer';
import {RegisterContainer} from '../containers/RegisterContainer';

import '../style/App.css';

// const RoutesWhenLoggedIn = (props) => (
//   <Switch>
//     <Route path="/" exact component={Home} />
//     <Redirect from="/login" to="/" />
//     <Redirect from="/register" to="/" />
//     <Route path="/transactions/new" exact render={bindProps(NewTransaction, props)} />
//     <Route path="/accounts" exact render={bindProps(AccountList, props)} />
//     <Route path="/accounts/new" exact render={bindProps(NewAccount, props)} />
//     <Route component={NotFound} />
//   </Switch>
// );
//
// const RoutesWhenLoggedOut = (props) => (
//   <Switch>
//     <Route path="/login" render={bindProps(Login, props)} />
//     <Route path="/register" render={bindProps(Registration, props)} />
//     <Redirect to="/login" />
//   </Switch>
// );

const RoutesWhenLoggedIn = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Redirect from="/login" to="/" />
    <Redirect from="/register" to="/" />
    <Route path="/accounts" exact component={AccountListContainer} />
    <Route path="/accounts/new" exact component={NewAccountContainer} />
    <Route component={NotFound} />
  </Switch>
);

const RoutesWhenLoggedOut = () => (
  <Switch>
    <Route path="/login" component={LoginContainer} />
    <Route path="/register" component={RegisterContainer} />
  </Switch>
);

export const App = ({history, currentUser}) => {
  if (!currentUser.isLoaded) return null;

  return (
    <Router history={history}>
      <div className="App">
        <Header />
        {currentUser.isPresent ? <RoutesWhenLoggedIn /> : <RoutesWhenLoggedOut />}
      </div>
    </Router>
  );
};
