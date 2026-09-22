const drawer=document.querySelector('[data-pdp-drawer]');
const backdrop=document.querySelector('[data-drawer-backdrop]');
const title=document.querySelector('[data-drawer-title]');
const note=document.querySelector('[data-drawer-note]');
const icon=document.querySelector('[data-drawer-icon]');
const link=document.querySelector('[data-drawer-link]');
const close=document.querySelector('[data-drawer-close]');
function closeDrawer(){drawer.setAttribute('aria-hidden','true');backdrop.hidden=true;document.body.classList.remove('drawer-open')}
function openDrawer(card){title.textContent=card.dataset.title;note.textContent=card.dataset.note;icon.textContent=card.dataset.icon;link.href=card.dataset.url;link.textContent=`Open ${card.dataset.title} category`;backdrop.hidden=false;drawer.setAttribute('aria-hidden','false');document.body.classList.add('drawer-open');close.focus()}
document.querySelectorAll('.category-card').forEach(card=>card.addEventListener('click',()=>openDrawer(card)));
close.addEventListener('click',closeDrawer);backdrop.addEventListener('click',closeDrawer);document.addEventListener('keydown',event=>{if(event.key==='Escape'&&drawer.getAttribute('aria-hidden')==='false')closeDrawer()});
