import { match } from '../utils';

const Route = ({
  path,
  template,

  exact,
  sensitive,
  strict,

  ...props
}) => {
  const result = match({
    current: window.location.pathname,
    path,
    exact,
    sensitive,
    strict,
  });

  if (result.match) {
    return template({ match: result.props, ...props });
  }

  return null;
};

export { Route };
