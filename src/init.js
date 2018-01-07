const init = () => (actions) => {
  window.onpopstate = actions.commisRouteUpdateAction;
};

export { init };
