import { dom, component } from '@mise/core';
import { commis } from '@mise/test';

import { Route, Switch, init, commisRouteUpdateAction } from '../../src/index';

import { setLocation } from '../utils';

const { render } = commis();

const TemplateA = () => <article />;
const TemplateB = () => <span />;
const TemplateC = ({ match }) => <main>{match.params.id}</main>;

describe('basic example of routing', () => {
  beforeEach(async () => {
    document.body.innerHTML = '';
    setLocation('/');

    component({
      template: () => () => (
        <Switch>
          <Route path="/users/" template={TemplateB} exact />
          <Route path="/users/:id" template={TemplateC} exact />

          <Route template={TemplateA} />
        </Switch>
      ),
      state: {},
      actions: {
        commisRouteUpdateAction,
      },
      init,
    });

    await render();
  });

  it('should display the catchall route', () => {
    expect(document.body.innerHTML).toEqual('<article></article>');
  });

  it('should display the users route route', async () => {
    expect(document.body.innerHTML).toEqual('<article></article>');

    setLocation('/users/');
    await render();

    expect(document.body.innerHTML).toEqual('<span></span>');
  });

  it('should display the specific user', async () => {
    setLocation('/users/13');
    await render();

    expect(document.body.innerHTML).toEqual('<main>13</main>');
  });
});
