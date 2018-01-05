import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from './components/AppContainer';
import {AppActions} from './data/AppActions';
import {history} from './history';

{
  const {location} = history;
  AppActions.changeRoute(location.pathname, {
    search: location.search,
    hash: location.hash,
    modifyHistory: false,
  });
}
history.listen((location, action) => {
  console.log(location, action);
  AppActions.changeRoute(location.pathname, {
    search: location.search,
    hash: location.hash,
    modifyHistory: false,
  });
});

ReactDOM.render(<AppContainer />, document.getElementById('app'));
