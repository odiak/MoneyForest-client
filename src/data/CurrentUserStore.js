import {ReduceStore} from 'flux/utils';
import {Record} from 'immutable';
import {AppActionTypes} from './AppActionTypes';

const State = Record({
  name: '',
  email: '',
});

export class CurrentUserStore extends ReduceStore {
  getInitialState() {
    return null;
  }

  reduce(state, {type, payload}) {
    switch (type) {
      case AppActionTypes.REGISTRATION_SUCCEEDED:
      case AppActionTypes.LOGIN_SUCCEEDED:
      case AppActionTypes.SET_CURRENT_USER: {
        const {name, email} = payload;
        return new State({name, email});
      }
      default:
        return state;
    }
  }
}
