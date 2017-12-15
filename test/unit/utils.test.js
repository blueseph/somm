import { match } from '../../src/utils';

describe('match tests', () => {
  it('should match the base path', () => {
    const path = '/';
    const current = '/';

    const result = match({ path, current });

    expect(result.match).toEqual(true);
    expect(result.props.exact).toEqual(true);
  });

  it('should deal with no path', () => {
    const current = '/';

    const result = match({ current });

    expect(result.match).toEqual(true);
  });

  it('should match a nested url path', () => {
    const path = '/users/related/links';
    const current = '/users/related/links';

    const result = match({ path, current });

    expect(result.match).toEqual(true);
    expect(result.props.exact).toEqual(true);
  });

  it('should match and return params', () => {
    const path = '/users/:id';
    const current = '/users/123';

    const result = match({ path, current });

    expect(result.match).toEqual(true);
    expect(result.props.params.id).toEqual('123');
  });

  it('should handle a sensitive url', () => {
    const path = '/users';
    const current = '/Users/';
    const sensitive = true;

    const result = match({ path, current, sensitive });

    expect(result.match).toEqual(false);
  });

  it('should handle a strict url', () => {
    const path = '/users/';
    const current = '/users';
    const strict = true;

    const result = match({ path, current, strict });

    expect(result.match).toEqual(false);
  });

  it('shouldnt match a path with an exact path if they arent exactly the same', () => {
    const path = '/';
    const current = '/route';
    const exact = false;

    const result = match({
      path,
      current,
      exact,
    });

    expect(result.match).toEqual(true);
    expect(result.props.exact).toEqual(false);
  });
});
