import {ReduceStore} from 'flux/utils';
import {Record, List} from 'immutable';
import {AppActionTypes} from '../data/AppActionTypes';

const Account = Record({
  id: null,
  name: '',
});

const State = Record({
  hasNext: true,
  isLoaded: false,
  list: List(),
});

export class AccountsStore extends ReduceStore {
  getInitialState() {
    return new State();
  }

  reduce(state, {type, payload}) {
    switch (type) {
      case AppActionTypes.ACCOUNTS_LOADED:
        return state
          .set('hasNext', payload.hasNext)
          .set('isLoaded', true)
          .update('list', (list) => list.concat(payload.list.map((v) => new Account(v))));

      default:
        return state;
    }
  }
}
