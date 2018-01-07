import {Container} from 'flux/utils';
import {App} from './App';
import {AppDispatcher} from '../data/AppDispatcher';
import {AppActions} from '../data/AppActions';
import {history} from '../history';
import {RegistrationDraftStore} from '../stores/RegistrationDraftStore';
import {LoginDraftStore} from '../stores/LoginDraftStore';
import {CurrentUserStore} from '../stores/CurrentUserStore';
import {TransactionDraftStore} from '../stores/TransactionDraftStore';
import {AccountDraftStore} from '../stores/AccountDraftStore';
import {AccountsStore} from '../stores/AccountsStore';

const registrationDraftStore = new RegistrationDraftStore(AppDispatcher);
const loginDraftStore = new LoginDraftStore(AppDispatcher);
const currentUserStore = new CurrentUserStore(AppDispatcher);
const transactionDraftStore = new TransactionDraftStore(AppDispatcher);
const accountDraftStore = new AccountDraftStore(AppDispatcher);
const accountsStore = new AccountsStore(AppDispatcher);

export const AppContainer = Container.createFunctional(
  App,
  () => [
    registrationDraftStore,
    loginDraftStore,
    currentUserStore,
    transactionDraftStore,
    accountDraftStore,
    accountsStore,
  ],
  () => ({
    registrationDraft: registrationDraftStore.getState(),
    loginDraft: loginDraftStore.getState(),
    currentUser: currentUserStore.getState(),
    transactionDraft: transactionDraftStore.getState(),
    accountDraft: accountDraftStore.getState(),
    accounts: accountsStore.getState(),
    history,
    ...AppActions,
  }),
);
