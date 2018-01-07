import { dom } from '@mise/core';

const Link = ({ to = '#', state = {} }, children) => dom(
  'a',
  {
    href: to,
    onclick(e) {
      e.preventDefault();

      if (window.location.pathname !== to) {
        window.history.pushState(state, '', to);
      }
    },
  },
  children,
);

export { Link };
