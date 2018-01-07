const init = () => (actions) => {
  document.addEventListener('somm-pushstate', actions.commisRouteUpdateAction);
};

export { init };
