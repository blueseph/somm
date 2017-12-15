import { dom, component } from '@mise/core';

import { Route, Switch } from '../../src/index';

import { setLocation, requestAnimationFrame, requestIdleCallback } from '../utils';

window.requestIdleCallback = requestIdleCallback;
window.requestAnimationFrame = requestAnimationFrame;

const TemplateA = () => <article />;
const TemplateB = () => <span />;
const TemplateC = () => <main />;

describe('basic example of routing', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    setLocation('/');

    component({
      template: () => () => (
        <Switch>
          <Route path="/users/" template={TemplateB} exact />
          <Route path="/users:id" template={TemplateC} exact />

          <Route template={TemplateA} />
        </Switch>
      ),
      state: {},
      actions: {},
    });
  });

  it('should display the catchall route', (done) => {
    setTimeout(() => {
      expect(document.body.innerHTML).toEqual('<article></article>');
      done();
    }, 50);
  });

  it('should display the users route route', (done) => {
    setTimeout(() => {
      expect(document.body.innerHTML).toEqual('<article></article>');

      setLocation('/users/');
      console.log(window.location.pathname);

        try {
          setTimeout(() => {
            expect(document.body.innerHTML).toEqual('<span></span>');
            done();
          }, 50);
        } catch (ex) {
          console.error(ex);
        }
    }, 50);
  });
});
