const setLocation = (value) => {
  Object.defineProperty(window.location, 'pathname', {
    writable: true,
    value,
  });

  document.dispatchEvent(new Event('popstate'));
};

export { setLocation };
