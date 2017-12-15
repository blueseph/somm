# Route

Routes are how Mise determines what needs to be shown.

```js
const UserTemplate = ({ state, actions }) => (
  /* ... */
)
const HomeTemplate = ({ state, actions }) => (
  /* ... */
)

<Route state={state} actions={actions} path='/users/' template={UsersTemplate} />
<Route state={state} actions={actions} path='/' template={HomeTemplate} />
```

### Options

Routes can have options passed to them to better match your specifications. These are all false by default

`exact` means a path has to match exactly to match.

`sensitive` means routes match in case sensitive manner.

`strict` means trailing slashes are required.

```js
/* does NOT match '/users' or '/Users/' or '/users/123' */
<Route path='/users/' template={UsersTemplate} exact strict sensitive />
```

### Params

Routes can have params required of them. This is done by putting a colon (`:`) in front of the params required

```js
const UserTemplate = ({ match }) => {
  /** 
    match = { 
      path: '/users/:id',
      url: '/users/123',
      exact: true,
      params: { id: '123' } 
    }
  */
};

<Switch>
  <Route path='/users/:id' template={UserTemplate} />
</Switch>
```

