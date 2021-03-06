import { dom, component } from '@mise/core';
import { commis } from '@mise/test';

import { Route, init, commisRouteUpdateAction } from '../../src/index';

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
        <div>
          <Route path="/users/" template={TemplateB} exact />
          <Route path="/users/:id" template={TemplateC} exact />

          <Route template={TemplateA} />
        </div>
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
    expect(document.body.innerHTML).toEqual('<div><article></article></div>');
  });

  it('should display the users route route', async () => {
    expect(document.body.innerHTML).toEqual('<div><article></article></div>');

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
