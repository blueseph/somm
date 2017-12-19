const init = () => (actions) => {
  document.addEventListener('popstate', () => {
    actions.commisRouteUpdateAction();
  });
};

export { init };
