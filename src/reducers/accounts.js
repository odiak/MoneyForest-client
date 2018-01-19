import {Record, List} from 'immutable';

import {ACCOUNTS_LOADED, CLEAR_ACCOUNTS} from '../actions';

const Account = Record({
  id: null,
  name: '',
});

const AccountsState = Record({
  hasNext: true,
  isLoaded: false,
  list: List(),
});

export const accounts = (state = new AccountsState(), {type, payload}) => {
  switch (type) {
    case ACCOUNTS_LOADED:
      return state
        .set('hasNext', payload.hasNext)
        .set('isLoaded', true)
        .update('list', (list) => list.concat(payload.list.map((v) => new Account(v))));

    case CLEAR_ACCOUNTS:
      return state.update('list', (list) => list.clear());

    default:
      return state;
  }
};
