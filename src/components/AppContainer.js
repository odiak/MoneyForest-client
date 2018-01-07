import {Container} from 'flux/utils';
import {App} from './App';
import {AppDispatcher} from '../data/AppDispatcher';
import {AppActions} from '../data/AppActions';
import {RegistrationDraftStore} from '../stores/RegistrationDraftStore';
import {LoginDraftStore} from '../stores/LoginDraftStore';
import {CurrentUserStore} from '../stores/CurrentUserStore';
import {history} from '../history';

const registrationDraftStore = new RegistrationDraftStore(AppDispatcher);
const loginDraftStore = new LoginDraftStore(AppDispatcher);
const currentUserStore = new CurrentUserStore(AppDispatcher);

export const AppContainer = Container.createFunctional(
  App,
  () => [registrationDraftStore, loginDraftStore, currentUserStore],
  () => ({
    registrationDraft: registrationDraftStore.getState(),
    loginDraft: loginDraftStore.getState(),
    currentUser: currentUserStore.getState(),
    history,
    ...AppActions,
  }),
);
