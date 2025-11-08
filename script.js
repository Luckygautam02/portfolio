// Footer year and mobile nav
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('primaryMenu');

  function closeMenu(){
    if (!menu.classList.contains('open')) return;
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }
  function openMenu(){
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }

  if (toggle && menu){
    toggle.addEventListener('click', () => {
      menu.classList.contains('open') ? closeMenu() : openMenu();
    });
    // Close on link click (for one-page anchors)
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    // Close on escape
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
    // Reset on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) { menu.style.display = ''; menu.classList.remove('open'); }
    });
  }

  // Simple contact form handler for demo
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks! This demo uses a mailto: action. Replace it with your backend or form service.');
    });
  }
});
