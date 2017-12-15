# Redirect

Redirect is a Mise template that makes it easy to conditionally change where a user navigates to.

```js
<Redirect to='/login/' when={!state.auth.loggedIn} state={{ from: window.location.pathname }} />
```

`when` can also be a function

```js
<Redirect to='/' when={actions.shouldRedirectHome()} state={{ from: window.location.pathname }} />
```