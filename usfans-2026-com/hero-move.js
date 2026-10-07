(() => {
  if (document.body.dataset.page !== 'home') return;
  function move(){
    const section=document.querySelector('#categories');
    if(!section) return;
    const left=section.querySelector('.section-head > div:first-child');
    const right=section.querySelector('.section-head > div:last-child');
    if(!left||!right) return;
    const lang=document.getElementById('locale')?.value||'en',copy=(window.usfansLocaleContent||{})[lang]||(window.usfansLocaleContent||{}).en;
    left.innerHTML=`<p class="eyebrow">FindSpreadsheet / USFans</p><h2>${copy.legacyHero}</h2>`;
    right.innerHTML=`<p>${copy.legacyIntro}</p><form class="moved-search" id="movedSearch"><input id="movedQ" type="search" placeholder="${copy.legacySearch}" required><button>${copy.legacyGo}</button></form><p class="moved-hint">${copy.legacyHint}</p>`;
    const form=right.querySelector('#movedSearch');
    form.onsubmit=e=>{e.preventDefault();const q=right.querySelector('#movedQ').value.trim();if(q)location.href='https://findspreadsheet.com/search.html?keywords='+encodeURIComponent(q)+'&channelid=2'};
  }
  move();
  document.addEventListener('change',event=>{if(event.target.id==='locale')setTimeout(move,20)});
})();
