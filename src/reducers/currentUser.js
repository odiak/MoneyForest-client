import {Record} from 'immutable';

import {
  CURRENT_USER_LOADED,
  CURRENT_USER_FAILED_TO_LOAD,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  REGISTRATION_SUCCEEDED,
  REGISTRATION_FAILED,
} from '../actions';

const CurrentUserState = Record({
  isLoaded: false,
  isPresent: false,
  name: '',
  email: '',
});

export const currentUser = (state = new CurrentUserState(), {type, payload}) => {
  switch (type) {
    case CURRENT_USER_LOADED:
    case LOGIN_SUCCEEDED:
    case REGISTRATION_SUCCEEDED: {
      const {name, email} = payload;
      return state.merge({isLoaded: true, isPresent: true, name, email});
    }

    case CURRENT_USER_FAILED_TO_LOAD:
    case LOGIN_FAILED:
    case REGISTRATION_FAILED:
      return state.merge({isLoaded: true, isPresent: false});

    default:
      return state;
  }
};
