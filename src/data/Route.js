import {Record, Map} from 'immutable';

export const Route = Record({
  name: '',
  path: '',
  params: Map(),
  searchParams: Map(),
  search: '',
  hash: '',
});
