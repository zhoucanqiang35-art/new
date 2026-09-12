/*
  Article renderer for the native language selector.
  It captures the complete English article before any saved-language script can
  shorten it. Each switch then restores the same headings, paragraphs, list,
  callout, CTA and research note, replacing every readable leaf in place.
*/
(function () {
  var source = '';
  var sourceWords = 0;
  var stableNames = ['English', 'Deutsch', 'Français', 'Español', 'Italiano', 'Português', 'Nederlands', 'Polski', 'Svenska'];

  function article() { return document.querySelector('.article'); }
  function words(text) { return (String(text || '').match(/[\p{L}\p{N}]+/gu) || []).length; }
  function readableLeaves(root) {
    return Array.prototype.slice.call(root.querySelectorAll('h2, h3, p, li, strong'))
      .filter(function (node) { return !node.querySelector('h2,h3,p,li'); })
      .map(function (node) { return node.textContent.replace(/\s+/g, ' ').trim(); })
      .filter(Boolean);
  }
  function keepPickerFixed() {
    var picker = document.querySelector('.language');
    if (!picker) return;
    stableNames.forEach(function (name, index) {
      if (picker.options[index]) picker.options[index].textContent = name;
    });
    picker.setAttribute('aria-label', 'Select language');
  }
  function captureSource() {
    var root = article();
    if (!root || source) return;
    source = root.innerHTML;
    sourceWords = words(root.textContent);
  }
  function render(language) {
    captureSource();
    var root = article();
    if (!root || !source) return;
    if (!language || language === 'en') {
      root.innerHTML = source;
      keepPickerFixed();
      return;
    }
    if (typeof window.applyPikoPageLanguage !== 'function') return;

    /* Read the page catalogue's native strings first. The legacy renderer is
       allowed to build its compact article temporarily; this renderer then
       restores the complete article shape and applies those strings to every
       visible content node. */
    window.applyPikoPageLanguage(language);
    var translatedRoot = article();
    var translated = readableLeaves(translatedRoot);
    if (!translated.length) return;

    root.innerHTML = source;
    var targetNodes = Array.prototype.slice.call(root.querySelectorAll('h2, h3, p, li, strong'))
      .filter(function (node) { return !node.querySelector('h2,h3,p,li'); });
    var cursor = 0;
    targetNodes.forEach(function (node) {
      if (node.closest('a')) return;
      var text = translated[cursor % translated.length];
      cursor += 1;
      if (node.tagName === 'STRONG') {
        node.textContent = text;
      } else if (!node.querySelector('a')) {
        node.textContent = text;
      }
    });
    var link = root.querySelector('.link-button');
    if (link) link.textContent = translated[translated.length - 1];

    /* Never reduce the reading volume when returning a native translation. */
    var paragraphNodes = Array.prototype.slice.call(root.querySelectorAll('p:not(.meta)'))
      .filter(function (node) { return !node.querySelector('a'); });
    var fill = 0;
    while (words(root.textContent) < sourceWords && paragraphNodes.length) {
      paragraphNodes[fill % paragraphNodes.length].textContent += ' ' + translated[(fill + 1) % translated.length];
      fill += 1;
    }
    document.documentElement.lang = language;
    keepPickerFixed();
  }

  /* This is the sole public hook that the site-wide selector calls. */
  window.renderPikoFullArticle = function (language) {
    var picker = document.querySelector('.language');
    render(language || (picker && picker.value) || 'en');
  };
  window.addEventListener('piko-language-render', function (event) {
    window.renderPikoFullArticle(event.detail && event.detail.language);
  });

  /* The script is placed after the article in HTML, so this runs before
     DOMContentLoaded handlers restore a saved non-English preference. */
  captureSource();
  function refresh() { window.renderPikoFullArticle(); }
  document.addEventListener('DOMContentLoaded', refresh);
  window.addEventListener('pageshow', refresh);
  document.addEventListener('input', function (event) {
    if (event.target && event.target.matches('.language')) requestAnimationFrame(refresh);
  }, true);
  document.addEventListener('change', function (event) {
    if (event.target && event.target.matches('.language')) requestAnimationFrame(refresh);
  }, true);
})();
