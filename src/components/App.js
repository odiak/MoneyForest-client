import * as React from 'react';
import {Header} from './Header';
import {Login} from './Login';
import {Registration} from './Registration';

const components = {
  home: (props) => <p>home</p>,
  login: Login,
  registration: Registration,
  unknown: (props) => <p>not found</p>,
};

export const App = (props) => {
  if (!props.route.name) return null;

  const Component = components[props.route.name];
  const content = Component ? <Component {...props} /> : null;

  return (
    <div>
      <Header {...props} />
      {content}
    </div>
  );
};
