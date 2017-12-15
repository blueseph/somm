# Link

Links are a Mise template designed to make navigating around your application a little simpler. Link is just a small wrapper around anchor tags.

```jsx
<Link to={`/users/${user.id}`} state={{ from: location.history.pathname }}>
  <img src={user.image} />
</Link>
```