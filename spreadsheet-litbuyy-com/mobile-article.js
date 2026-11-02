(() => {
  if (!window.matchMedia('(max-width: 760px)').matches) return;
  const article = document.querySelector('.longform');
  const picker = document.querySelector('#language');
  if (!article) return;
  function wrapSections() {
    [...article.querySelectorAll(':scope > h2')].forEach((heading) => {
      const section = document.createElement('details');
      section.className = 'article-section';
      const summary = document.createElement('summary');
      summary.textContent = heading.textContent;
      const content = document.createElement('div');
      heading.before(section); section.append(summary, content);
      let node = heading;
      while (node && (node === heading || node.tagName !== 'H2')) {
        const next = node.nextSibling; content.append(node); node = next;
      }
    });
  }
  wrapSections();
  if (picker) picker.addEventListener('change', wrapSections);
})();
