import { Redirect } from '../../src/templates/redirect';

describe('redirect', () => {
  it('should try to redirect you if you match the conditional', () => {
    window.history.replaceState = jest.fn();
    const to = '/users/';
    const when = true;
    const state = { a: 1 };

    Redirect({ to, when, state });

    expect(window.history.replaceState).toHaveBeenCalledWith(state, '', to);
  });

  it('should try to match even if the conditional is a function', () => {
    window.history.replaceState = jest.fn();
    const to = '/users/';
    const when = () => true;
    const state = { a: 1 };

    Redirect({ to, when, state });

    expect(window.history.replaceState).toHaveBeenCalledWith(state, '', to);
  });

  it('should do nothing if you dont match the conditional', () => {
    window.history.replaceState = jest.fn();
    const to = '/users/';
    const when = () => false;
    const state = { a: 1 };

    Redirect({ to, when, state });

    expect(window.history.replaceState).not.toHaveBeenCalled();
  });
});
