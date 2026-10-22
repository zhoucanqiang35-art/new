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

  const languages = [
    ['en', 'English'],
    ['sv', 'Svenska'],
    ['de', 'Deutsch'],
    ['fr', 'Français'],
    ['es', 'Español'],
    ['it', 'Italiano'],
    ['pt', 'Português'],
    ['nl', 'Nederlands'],
    ['pl', 'Polski']
  ];
  const availableLanguages = new Set(languages.map(([code]) => code));
  const requestedLanguage = new URL(window.location.href).searchParams.get('lang');
  const savedLanguage = window.localStorage.getItem('pikobuysheet-language');
  const language = availableLanguages.has(requestedLanguage)
    ? requestedLanguage
    : availableLanguages.has(savedLanguage) ? savedLanguage : 'en';
  const header = document.querySelector('.site-header');

  const applyLanguage = (code, { updateUrl = false } = {}) => {
    document.documentElement.lang = code;
    document.documentElement.dataset.language = code;
    window.localStorage.setItem('pikobuysheet-language', code);

    document.querySelectorAll('a[href]').forEach(link => {
      const destination = new URL(link.getAttribute('href'), window.location.href);
      if (destination.origin !== window.location.origin || destination.protocol !== window.location.protocol) return;
      destination.searchParams.set('lang', code);
      link.href = destination.href;
    });

    if (updateUrl) {
      const current = new URL(window.location.href);
      current.searchParams.set('lang', code);
      window.history.replaceState({}, '', current);
    }
  };

  if (header && !document.querySelector('#site-language')) {
    const picker = document.createElement('label');
    picker.className = 'language-picker';
    picker.innerHTML = '<span class="sr-only">Language</span><select id="site-language" aria-label="Language"></select>';
    const select = picker.querySelector('select');

    languages.forEach(([code, name]) => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = name;
      option.selected = code === language;
      select.appendChild(option);
    });

    select.addEventListener('change', () => {
      applyLanguage(select.value, { updateUrl: true });
      window.dispatchEvent(new CustomEvent('pikobuysheet-language-change', { detail: { language: select.value } }));
    });
    header.appendChild(picker);
  }
  applyLanguage(language);

  document.querySelectorAll('[data-main-search]').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const query = new FormData(form).get('q')?.trim();
    const url = new URL('https://findspreadsheet.com/');
    if (query) url.searchParams.set('q', query);
    window.location.href = url.toString();
  }));
});
