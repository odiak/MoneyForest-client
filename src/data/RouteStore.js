import {ReduceStore} from 'flux/utils';
import {AppActionTypes} from './AppActionTypes';
import {Route} from './Route';

export class RouteStore extends ReduceStore {
  getInitialState() {
    return new Route();
  }

  reduce(state, {type, payload}) {
    switch (type) {
      case AppActionTypes.CHANGE_ROUTE:
        return payload;
      default:
        return state;
    }
  }
}
