import { dom } from '@mise/core';

const Link = ({ to = '#', state = {}, ...rest }, children) => dom(
  'a',
  {
    href: to,
    onclick(e) {
      e.preventDefault();

      if (window.location.pathname !== to) {
        window.history.pushState(state, '', to);
        document.dispatchEvent(new Event('somm-pushstate'));
      }
    },
    rest,
  },
  children,
);

export { Link };
