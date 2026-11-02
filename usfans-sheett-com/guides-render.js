(() => {
  const slugs = ['usfans-ordering-guide', 'usfans-qc-photos-guide', 'usfans-shipping-cost-guide'];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function updateGuides() {
    const data = GUIDE_DATA[g] || GUIDE_DATA.en;
    const article = document.querySelector('.article');
    if (!article) return;
    const guideId = document.body.dataset.guide;
    if (guideId !== undefined) {
      const index = Number(guideId), guide = data.guides[index];
      if (!guide) return;
      const hero = document.querySelector('.pagehero');
      if (hero) { const h = hero.querySelector('h1'), p = hero.querySelector('p:last-child'); if (h) h.textContent = guide.title; if (p) p.textContent = guide.intro; }
      article.innerHTML = '<p class="kicker">'+esc(data.label)+'</p><h2>'+esc(guide.title)+'</h2><p>'+esc(guide.intro)+'</p>'+guide.sections.map(([heading,body])=>'<h3>'+esc(heading)+'</h3><p>'+esc(body)+'</p>').join('')+'<p><a href="categories">'+esc(data.return)+' →</a></p>';
    } else {
      article.querySelectorAll('[data-related-guides]').forEach(n=>n.remove());
      const links = document.createElement('div'); links.dataset.relatedGuides = '';
      links.innerHTML = '<h3>'+esc(data.label)+'</h3>'+data.guides.map((guide,i)=>'<h3><a href="'+slugs[i]+'">'+esc(guide.title)+' →</a></h3>'+(Q === 'home' ? '<p>'+esc(guide.intro)+'</p>'+guide.sections.map(([heading,body])=>'<h3>'+esc(heading)+'</h3><p>'+esc(body)+'</p>').join('') : '')).join('');
      article.appendChild(links);
    }
  }
  const originalRender = render;
  render = function () { originalRender(); setTimeout(updateGuides, 50); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(updateGuides, 50), {once:true});
  else setTimeout(updateGuides, 50);
})();
