const init = () => (actions) => {
  document.addEventListener('somm-pushstate', actions.commisRouteUpdateAction);
  window.onpopstate = actions.commisRouteUpdateAction;
};

export { init };
