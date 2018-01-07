import {ReduceStore} from 'flux/utils';
import {Record} from 'immutable';
import {format} from 'date-fns';
import {AppActionTypes} from '../data/AppActionTypes';

const State = Record({
  accountId: undefined,
  title: '',
  description: '',
  amount: 0,
  transactionType: 'expense',
  date: undefined,
  categoryId: undefined,
});

export class TransactionDraftStore extends ReduceStore {
  getInitialState() {
    return new State();
  }

  reduce(state, {type, payload}) {
    switch (type) {
      case AppActionTypes.RESET_TRANSACTION_DRAFT:
        return new State({
          date: format(new Date(), 'YYYY-MM-DD'),
        });

      case AppActionTypes.UPDATE_TRANSACTION_DRAFT:
        return state.merge(payload);

      default:
        return state;
    }
  }
}
