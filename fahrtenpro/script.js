(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#mobile-nav');
  const closeMenu = () => {
    nav.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menü öffnen');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !nav.hidden) {
      closeMenu();
      toggle.focus();
    }
  });
  const desktop = window.matchMedia('(min-width: 851px)');
  desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });
  const top = document.querySelector('.back-top');
  const updateTop = () => { top.hidden = window.scrollY < 450; };
  window.addEventListener('scroll', updateTop, { passive: true });
  top.addEventListener('click', () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' });
    document.querySelector('.brand').focus({ preventScroll: true });
  });
  updateTop();
})();
