const menuButton=document.querySelector('.menu-toggle');
const mobileMenu=document.getElementById('mobile-nav');
function closeMenu(){mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Menü öffnen')}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';mobileMenu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen')});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const tabs=[...document.querySelectorAll('[role="tab"]')];
const captions={rechner:'Rechner · Schritt für Schritt zur persönlichen Modellrechnung.',analyse:'Analyse · Förderung, Nettoaufwand und Modellvermögen im Überblick.',vergleich:'Vergleich · Die Unterschiede Ihrer Vorsorgewege erkennen.'};
function activate(tab){tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1});const name=tab.dataset.image;document.getElementById('gallery-image').src=`assets/${name}.webp`;document.getElementById('gallery-image').alt=`Originalansicht: AVDepot ${name} auf dem iPhone`;document.getElementById('screen-description').textContent=captions[name];document.getElementById('screen-panel').setAttribute('aria-labelledby',tab.id)}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activate(tab));tab.addEventListener('keydown',e=>{let n;if(e.key==='ArrowDown'||e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowUp'||e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();tabs[n].focus();activate(tabs[n])}})});
const backTop=document.querySelector('.back-top');function updateTop(){backTop.classList.toggle('visible',window.scrollY>550)}window.addEventListener('scroll',updateTop,{passive:true});updateTop();
