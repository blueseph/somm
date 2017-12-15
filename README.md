# Mise Routing

Declarative routing for [Mise](https://github.com/blueseph/mise)

### Installation

> npm i --save @mise/router

In your actual project

```js
import { dom, component } from '@mise/core';
import { Route, Link } from '@mise/router';
```

You can also use the UMD version

```js
<script async src="https://unpkg.com/@mise/core"></script>
<script async src="https://unpkg.com/@mise/router"></script>
<script type="javascript">
  const { dom, component } = mise;
  const { Route, Link } = miseRouter;
</script>
```

Neither Mise nor the router require compilation to run, but you won't be able to use JSX until you do.

### Examples

```js
import { dom, component } from '@mise/core';
import { Route, Switch } from '@mise/router';

import { template as HomeTemplate } from './components/home/home.template';
import { template as LoginTemplate } from './component/login/login.template';
import { template as RegisterTemplate } from './component/register/register.template';

import { template as TracksTemplate } from './components/tracks/tracks.template';
import { template as TrackTemplate } from './component/track/track.template';

import { state } from './state.js';
import { actions } from './actions.js';

component({
    template: state => actions => (
        <Switch>
            <Route path="/" template={HomeTemplate} />
            <Route path="/login" template={LoginTemplate} />
            <Route path="/register" template={RegisterTemplate} />
            
            <Route path="/tracks" template={TracksTemplate} />
            <Route path="/tracks/:id" template={TrackTemplate} />
        </Switch>
    ),
    state,
    actions,
    root: document.querySelector('#app');
})
```

More details can be found in the docs.

