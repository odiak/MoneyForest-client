import {ReduceStore} from 'flux/utils';
import {Record} from 'immutable';
import {AppActionTypes} from '../data/AppActionTypes';

const State = Record({
  userName: '',
  email: '',
  password: '',
});

export class RegistrationDraftStore extends ReduceStore {
  getInitialState() {
    return new State();
  }

  reduce(state, {type, payload}) {
    switch (type) {
      case AppActionTypes.UPDATE_REGISTRATION_USER_NAME:
        return state.set('userName', payload);

      case AppActionTypes.UPDATE_REGISTRATION_EMAIL:
        return state.set('email', payload);

      case AppActionTypes.UPDATE_REGISTRATION_PASSWORD:
        return state.set('password', payload);

      default:
        return state;
    }
  }
}
