import {Record} from 'immutable';

import {UPDATE_LOGIN_DRAFT} from '../actions';

const LoginDraftState = Record({
  email: '',
  password: '',
});

export const loginDraft = (state = new LoginDraftState(), {type, payload}) => {
  switch (type) {
    case UPDATE_LOGIN_DRAFT:
      return state.merge(payload);

    default:
      return state;
  }
};
