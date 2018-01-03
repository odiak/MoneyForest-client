import {ReduceStore} from 'flux/utils';
import {AppActionTypes} from './AppActionTypes';

export class CounterStore extends ReduceStore {
  getInitialState() {
    return 0;
  }

  reduce(state, {type}) {
    switch (type) {
      case AppActionTypes.INCREMENT:
        return state + 1;
      case AppActionTypes.DECREMENT:
        return state - 1;
      default:
        return state;
    }
  }
}
