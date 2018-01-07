import {ReduceStore} from 'flux/utils';
import {Record} from 'immutable';
import {AppActionTypes} from '../data/AppActionTypes';

const State = Record({
  name: '',
  description: '',
  accountType: 'wallet',
  hasBalance: false,
  balance: 0,
});

export class AccountDraftStore extends ReduceStore {
  getInitialState() {
    return new State();
  }

  reduce(state, {type, payload}) {
    switch (type) {
      case AppActionTypes.UPDATE_ACCOUNT_DRAFT:
        return state.merge(payload);

      default:
        return state;
    }
  }
}
