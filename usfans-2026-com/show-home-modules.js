(() => {
  if (document.body.dataset.page !== 'home') return;
  const show = () => document.querySelectorAll('#app main > .section').forEach(section => { section.style.display = ''; });
  show();
  document.addEventListener('change', event => {
    if (event.target.id === 'locale') setTimeout(show, 10);
  });
})();
