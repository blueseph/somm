const Redirect = ({ to, when, state }) => {
  const conditional = typeof when === 'function' ? when() : when;

  if (conditional) {
    window.history.replaceState(state, '', to);
  }
};

export { Redirect };
