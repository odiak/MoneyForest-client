import {Container} from 'flux/utils';
import {App} from './App';
import {AppDispatcher} from '../data/AppDispatcher';
import {CounterStore} from '../data/CounterStore';
import {AppActions} from '../data/AppActions';

const counterStore = new CounterStore(AppDispatcher);

export const AppContainer = Container.createFunctional(
  App,
  () => [counterStore],
  () => ({
    count: counterStore.getState(),
    ...AppActions,
  }),
);
