(() => {
  if (!window.matchMedia('(max-width: 760px)').matches) return;
  const article = document.querySelector('.longform');
  if (!article || article.dataset.mobileSectionsReady) return;
  article.dataset.mobileSectionsReady = 'true';
  [...article.querySelectorAll('h2')].forEach((heading) => {
    const section = document.createElement('details');
    section.className = 'article-section';
    const summary = document.createElement('summary');
    summary.textContent = heading.textContent;
    const content = document.createElement('div');
    heading.before(section);
    section.append(summary, content);
    let node = heading;
    while (node && (node === heading || node.tagName !== 'H2')) {
      const next = node.nextSibling;
      content.append(node);
      node = next;
    }
  });
})();
