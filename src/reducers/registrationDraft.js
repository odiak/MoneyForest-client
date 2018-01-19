import {Record} from 'immutable';

import {UPDATE_REGISTRATION_DRAFT} from '../actions';

const RegistrationDraftState = Record({
  userName: '',
  email: '',
  password: '',
});

export const registrationDraft = (state = new RegistrationDraftState(), {type, payload}) => {
  switch (type) {
    case UPDATE_REGISTRATION_DRAFT:
      return state.merge(payload);

    default:
      return state;
  }
};
