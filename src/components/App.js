import * as React from 'react';

export const App = (props) => (
  <div>
    <p>{props.count}</p>
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
  </div>
);
