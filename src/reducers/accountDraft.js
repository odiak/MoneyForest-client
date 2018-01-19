import {Record} from 'immutable';

const AccountDraftState = Record({
  name: '',
  description: '',
  accountType: 'wallet',
  hasBalance: false,
  balance: 0,
});

export const accountDraft = (state = new AccountDraftState(), {type, payload}) => {
  switch (type) {
    case 'UPDATE_ACCOUNT_DRAFT':
      return state.merge(payload);

    default:
      return state;
  }
};
