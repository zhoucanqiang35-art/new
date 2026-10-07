(() => {
  const list = () => window.productFinds || [];
  function setup(root){
    if(root.dataset.carouselReady) return;
    const finds=list(); if(!finds.length) return;
    root.dataset.carouselReady='true';
    const track=root.querySelector('.carousel-track');
    const slides=[...root.querySelectorAll('.carousel-slide')];
    const dots=[...root.querySelectorAll('.carousel-dot')];
    const name=root.querySelector('[data-product-name]');
    const category=root.querySelector('[data-product-category]');
    const price=root.querySelector('[data-product-price]');
    const status=root.querySelector('[data-product-status]');
    const action=root.querySelector('[data-product-action]');
    const number=root.querySelector('[data-product-number]');
    let current=0, timer;
    function choose(index){
      current=(index+finds.length)%finds.length;
      const p=finds[current];
      track.style.transform=`translateX(-${current*100}%)`;
      slides.forEach((s,i)=>s.classList.toggle('is-active',i===current));
      dots.forEach((d,i)=>d.classList.toggle('is-active',i===current));
      const copy=window.usfansActiveCopy||{};name.textContent=p.name; category.textContent=p.category; price.textContent=p.price; price.href=p.href; status.textContent=copy.productStatus||p.note; action.textContent=(copy.productAction||'View details & price')+' ↗'; action.href=p.href; number.textContent=String(current+1).padStart(2,'0');
    }
    function restart(){clearInterval(timer);timer=setInterval(()=>choose(current+1),4200)}
    [...slides,...dots].forEach(control=>control.addEventListener('click',()=>{choose(Number(control.dataset.productIndex));restart()}));
    root.addEventListener('mouseenter',()=>clearInterval(timer));
    root.addEventListener('mouseleave',restart);
    choose(0); restart();
  }
  function init(){document.querySelectorAll('[data-product-carousel]').forEach(setup)}
  document.addEventListener('usfans-rendered',init); init();
})();
