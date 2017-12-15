# Router

Switch returns the first matching route it finds. You can use this to remove any ambiguity if two routes end up matching one path.

```js
import { dom, component } from '@mise/core';
import { Switch, Route } from '@mise/router';

import { state } from './state';
import { actions } from './actions';

import { template as UsersTemplate } from './components/users/users.template';
import { template as NoMatch } from './components/nomatch/nomatch.template';

component({
  template: state => actions => (
    <Switch>
      <Route path="/users/" template={UsersTemplate} />
      <Route template={NoMatch} />
    </Switch>
  )
});
```