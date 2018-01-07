import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from './components/AppContainer';
import {AppActions} from './data/AppActions';

AppActions.loadCurrentUser();

ReactDOM.render(<AppContainer />, document.getElementById('app'));
