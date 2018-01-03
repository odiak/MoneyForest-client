import {AppDispatcher} from './AppDispatcher';
import {AppActionTypes} from './AppActionTypes';

function dispatch(type, payload) {
  AppDispatcher.dispatch({type, payload});
}

export const AppActions = {
  increment() {
    dispatch(AppActionTypes.INCREMENT);
  },
  decrement() {
    dispatch(AppActionTypes.DECREMENT);
  },
};
