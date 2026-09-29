/* Prevent the legacy article renderer from running before its full locale data exists. */
(() => {
  const key = 'usfans-v12-lang';
  const requested = localStorage.getItem(key);
  if (requested && requested !== 'en') localStorage.setItem(key, 'en');

  window.addEventListener('DOMContentLoaded', () => {
    if (!requested || requested === 'en') return;
    localStorage.setItem(key, requested);
    g = requested;
    render();
  }, { once: true });
})();
