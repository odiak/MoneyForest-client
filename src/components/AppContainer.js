import {Container} from 'flux/utils';
import {App} from './App';
import {AppDispatcher} from '../data/AppDispatcher';
import {AppActions} from '../data/AppActions';
import {RouteStore} from '../data/RouteStore';
import {RegistrationDraftStore} from '../data/RegistrationDraftStore';
import {LoginDraftStore} from '../data/LoginDraftStore';
import {CurrentUserStore} from '../data/CurrentUserStore';

const routeStore = new RouteStore(AppDispatcher);
const registrationDraftStore = new RegistrationDraftStore(AppDispatcher);
const loginDraftStore = new LoginDraftStore(AppDispatcher);
const currentUserStore = new CurrentUserStore(AppDispatcher);

export const AppContainer = Container.createFunctional(
  App,
  () => [routeStore, registrationDraftStore, loginDraftStore, currentUserStore],
  () => ({
    route: routeStore.getState(),
    registrationDraft: registrationDraftStore.getState(),
    loginDraft: loginDraftStore.getState(),
    currentUser: currentUserStore.getState(),
    ...AppActions,
  }),
);
