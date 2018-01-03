import {AppDispatcher} from './AppDispatcher';
import {AppActionTypes} from './AppActionTypes';
import {history} from '../history';
import {route} from '../routes';

function dispatch(type, payload) {
  AppDispatcher.dispatch({type, payload});
}

export const AppActions = {
  changeRoute(path, {search = '', hash = '', modifyHistory = true} = {}) {
    if (modifyHistory) {
      history.push(path);
    }
    const r = route(path, search, hash);
    console.log(r.toJS());
    dispatch(AppActionTypes.CHANGE_ROUTE, r);
  },

  increment() {
    dispatch(AppActionTypes.INCREMENT);
  },

  decrement() {
    dispatch(AppActionTypes.DECREMENT);
  },
};
