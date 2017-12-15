import { dom } from '@mise/core';

import { Route } from '../../src/templates/route';

import { setLocation } from '../utils';

describe('router', () => {
  const state = { a: 1 };
  const actions = { noop: () => {} };

  const template = (props, children) => (<div {...props}>{children}</div>);

  beforeEach(() => {
    setLocation('/users/123');
  });

  it('should return nothing if the path doesnt match', () => {
    const route = (
      <Route
        template={template}
        state={state}
        actions={actions}
        path="/users/"
        exact
      />
    );

    expect(route).toBeNull();
  });

  it('should return the route with the match params if it does match', () => {
    const route = (
      <Route
        template={template}
        state={state}
        actions={actions}
        path="/users/:id"
        exact
      />
    );

    expect(route).not.toBeNull();
    expect(route.props.state).toEqual(state);
    expect(route.props.actions).toEqual(actions);
    expect(route.props.match.exact).toEqual(true);
    expect(route.props.match.params).toEqual({ id: '123' });
  });
});
