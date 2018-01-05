import {Map} from 'immutable';
import {Route} from './data/Route';

const routes = [
  ['home', '/'],
  ['login', '/login'],
  ['registration', '/register'],
  ['categoryList', '/categories'],
];

function normalizePath(path) {
  if (path !== '/' && path.charAt(path.length - 1) === '/') {
    return path.slice(0, path.length - 1);
  }
  return path;
}

export function route(rawPath, search, hash) {
  const path = normalizePath(rawPath);

  const searchParams = {};
  if (search.length > 1) {
    for (const s of search.slice(1).split('&')) {
      let [k, v] = s.split('=', 2);
      if (typeof v === 'undefined') {
        v = true;
      }
      searchParams[k] = v;
    }
  }

  let routeName = 'unknown';
  const params = {};
  for (const [name, pattern] of routes) {
    if (typeof pattern === 'string') {
      if (path === pattern) {
        routeName = name;
        break;
      }
    }
  }

  return new Route({
    name: routeName,
    path: rawPath,
    params: Map(params),
    searchParams: Map(searchParams),
    search,
    hash,
  });
}
