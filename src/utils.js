import pathToRegexp from 'path-to-regexp';

const match = ({ path = '/', current, ...options }) => {
  const result = { match: false };

  const keys = [];
  const optionsWithDefaults = {
    strict: false,
    sensitive: false,
    ...options,
    end: options.exact || false,
  };

  const regex = pathToRegexp(path, keys, optionsWithDefaults);
  const matched = regex.exec(current);

  if (!matched) {
    return result;
  }

  const [url, ...values] = matched;
  const exact = url === current;

  if (options.exact && !exact) {
    return result;
  }

  const params = keys.reduce((collection, key, index) => {
    collection[key.name] = values[index];
    return collection;
  }, {});

  return {
    match: true,
    props: {
      path,
      url,
      exact,
      params,
    },
  };
};

export { match };
