const setLocation = value =>
  Object.defineProperty(window.location, 'pathname', {
    writable: true,
    value,
  });

const requestAnimationFrame = setTimeout;

const requestIdleCallback = function ric(cb) {
  const start = Date.now();
  return setTimeout(() => {
    cb({
      didTimeout: false,
      timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      },
    });
  }, 1);
};

export { setLocation, requestAnimationFrame, requestIdleCallback };
