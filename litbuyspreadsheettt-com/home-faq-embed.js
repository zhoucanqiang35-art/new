(() => {
  const target = document.querySelector('#homeFaqContent');
  if (!target) return;
  fetch('faq.html', { credentials: 'same-origin' })
    .then(response => {
      if (!response.ok) throw new Error('FAQ source unavailable');
      return response.text();
    })
    .then(html => {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const source = doc.querySelector('.faq-wrap');
      if (!source) throw new Error('FAQ content unavailable');
      target.innerHTML = source.innerHTML;
      document.dispatchEvent(new Event('litbuy-home-faq-ready'));
    })
    .catch(() => {
      target.innerHTML = '<p class="faq-intro">The complete FAQ is currently available on the dedicated FAQ page.</p>';
    });
})();
