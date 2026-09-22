const backTop = document.querySelector('.back-top');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function updateBackTop() { backTop.hidden = window.scrollY < 420; }
window.addEventListener('scroll', updateBackTop, { passive: true });
updateBackTop();
backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  document.querySelector('.header .brand').focus({ preventScroll: true });
});
