(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-nav');
  const closeMenu = () => { menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => {
    menu.hidden = !menu.hidden;
    toggle.setAttribute('aria-expanded', String(!menu.hidden));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) { closeMenu(); toggle.focus(); }
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  const narrow = matchMedia('(max-width: 800px)');
  const contents = document.querySelector('.contents details');
  const adapt = () => { if (contents) contents.open = !narrow.matches; if (!narrow.matches) closeMenu(); };
  narrow.addEventListener('change', adapt);
  adapt();
  const topButton = document.querySelector('.back-top');
  const syncTop = () => { topButton.hidden = window.scrollY < 400; };
  window.addEventListener('scroll', syncTop, { passive: true });
  topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    document.querySelector('.skip').focus({ preventScroll: true });
  });
  syncTop();
})();
