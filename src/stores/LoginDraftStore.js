import {ReduceStore} from 'flux/utils';
import {Record} from 'immutable';
import {AppActionTypes} from '../data/AppActionTypes';

const State = Record({
  email: '',
  password: '',
});

export class LoginDraftStore extends ReduceStore {
  getInitialState() {
    return new State();
  }

  reduce(state, {type, payload}) {
    switch (type) {
      case AppActionTypes.UPDATE_LOGIN_EMAIL:
        return state.set('email', payload);

      case AppActionTypes.UPDATE_LOGIN_PASSWORD:
        return state.set('password', payload);

      default:
        return state;
    }
  }
}
