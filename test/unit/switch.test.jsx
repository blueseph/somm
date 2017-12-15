import { dom } from '@mise/core';

import { Switch } from '../../src/templates/switch';

describe('router', () => {
  it('should return the only valid value in an array', () => {
    const valid = { a: 1 };
    const routes = [null, null, valid, null];

    const route = (
      <Switch>
        {routes}
      </Switch>
    );

    expect(route).toEqual(valid);
  });
});
