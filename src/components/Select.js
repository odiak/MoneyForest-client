import * as React from 'react';

export const Select = ({options, ...rest}) => (
  <select {...rest}>
    {options &&
      options.map(([v, label]) => (
        <option key={v} value={v}>
          {typeof label === 'undefined' ? v : label}
        </option>
      ))}
  </select>
);
