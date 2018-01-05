import * as React from 'react';

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

export const Link = (props) => {
  const {to, children, onClick, parentProps, ...rest} = props;
  const {changeRoute} = parentProps;

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }

    if (!event.defaultPrevented && event.button === 0 && !props.target && !isModifiedEvent(event)) {
      event.preventDefault();
      changeRoute(to);
    }
  };

  return (
    <a {...rest} onClick={handleClick} href={to}>
      {children}
    </a>
  );
};
