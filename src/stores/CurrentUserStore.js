import {ReduceStore} from 'flux/utils';
import {Record} from 'immutable';
import {AppActionTypes} from '../data/AppActionTypes';

const State = Record({
  isLoaded: false,
  isPresent: false,
  name: '',
  email: '',
});

export class CurrentUserStore extends ReduceStore {
  getInitialState() {
    return new State();
  }

  reduce(state, {type, payload}) {
    switch (type) {
      case AppActionTypes.REGISTRATION_SUCCEEDED:
      case AppActionTypes.LOGIN_SUCCEEDED:
      case AppActionTypes.SET_CURRENT_USER: {
        const {name, email} = payload;
        return state.merge({isLoaded: true, isPresent: true, name, email});
      }
      case AppActionTypes.UNSET_CURRENT_USER: {
        return state.merge({isLoaded: true, isPresent: false});
      }
      default:
        return state;
    }
  }
}
