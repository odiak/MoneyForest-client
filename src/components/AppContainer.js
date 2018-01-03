import {Container} from 'flux/utils';
import {App} from './App';
import {AppDispatcher} from '../data/AppDispatcher';
import {CounterStore} from '../data/CounterStore';
import {RouteStore} from '../data/RouteStore';
import {AppActions} from '../data/AppActions';

const counterStore = new CounterStore(AppDispatcher);
const routeStore = new RouteStore(AppDispatcher);

export const AppContainer = Container.createFunctional(
  App,
  () => [counterStore, routeStore],
  () => ({
    count: counterStore.getState(),
    route: routeStore.getState(),
    ...AppActions,
  }),
);
