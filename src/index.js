import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/index.css';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {history} from './history';

import {reducer} from './reducers';
import {AppContainer} from './containers/AppContainer';
import {rootSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer history={history} />
  </Provider>,
  document.getElementById('app'),
);
