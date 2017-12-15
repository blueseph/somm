import { dom } from '@mise/core';

import { Link } from '../../src/templates/link';

import { setLocation } from '../utils';

describe('link', () => {
  it('should return a dom node', () => {
    const to = '/users/';
    const link = <Link to={to} />;

    expect(link.type).toEqual('a');
    expect(link.props.href).toEqual(to);
    expect(typeof link.props.onclick).toEqual('function');
  });

  it('should relocate if it needs to', () => {
    const state = { from: '/users' };
    const preventDefault = jest.fn();
    const event = { preventDefault };

    setLocation('/users/');

    window.pushState = jest.fn();

    const link = <Link state={state} />;

    link.props.onclick(event);

    expect(preventDefault).toHaveBeenCalled();

    expect(window.pushState).toHaveBeenCalledWith(state, '', '#');
  });

  it('shouldnt try to relocate if it doesnt need to', () => {
    const to = '/users/';
    const preventDefault = jest.fn();
    const event = { preventDefault };

    setLocation('/users/');

    window.pushState = jest.fn();

    const link = <Link to={to} />;

    link.props.onclick(event);

    expect(window.pushState).not.toHaveBeenCalled();
  });
});
