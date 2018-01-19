import {combineReducers} from 'redux';
import {currentUser} from './currentUser';
import {accounts} from './accounts';
import {accountDraft} from './accountDraft';
import {loginDraft} from './loginDraft';
import {registrationDraft} from './registrationDraft';

export const reducer = combineReducers({
  currentUser,
  accounts,
  accountDraft,
  loginDraft,
  registrationDraft,
});
