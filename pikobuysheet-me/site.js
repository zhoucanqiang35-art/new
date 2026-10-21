(() => {
  const measurementId = 'G-QTYL7GTVKD';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(tag);
})();

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  if (button && nav) button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('[data-main-search]').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const query = new FormData(form).get('q')?.trim();
    const url = new URL('https://findspreadsheet.com/');
    if (query) url.searchParams.set('q', query);
    window.location.href = url.toString();
  }));
});
