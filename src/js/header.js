document.addEventListener('DOMContentLoaded', () => {
  const menuOpenBtn = document.querySelector('.header-menu-open-btn');
  const closeMenuBtn = document.querySelector('.close-menu-btn');
  const backdrop = document.querySelector('.backdrop');
  const menuLinks = document.querySelectorAll(
    '.backdrop-link, .hidden-menu-link'
  );

  function toggleMenu(show) {
    backdrop.classList.toggle('show', show);
    menuOpenBtn.style.display = show ? 'none' : 'block';
    closeMenuBtn.style.display = show ? 'block' : 'none';

  }

  menuOpenBtn?.addEventListener('click', () => toggleMenu(true));
  closeMenuBtn?.addEventListener('click', () => toggleMenu(false));
  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) toggleMenu(false);
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');


      if (href.startsWith('#')) {
        e.preventDefault();
        const targetEl = document.querySelector(href);
        if (targetEl) {
          const yOffset = -60;
          const y =
            targetEl.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          toggleMenu(false);
        }
      } else {

        toggleMenu(false);
      }
    });
  });

  function highlightMenu() {
    const sections = document.querySelectorAll('section[id], article[id]');
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document
          .querySelectorAll('.backdrop-link, .hidden-menu-link')
          .forEach(link => {
            link.classList.remove('active');
            const linkHash = new URL(link.href).hash;
            if (linkHash === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
      }
    });
  }

  window.addEventListener('scroll', highlightMenu);
  highlightMenu();

  const currentPath = window.location.pathname.split('/').pop();

  document.querySelectorAll('.backdrop-link').forEach(link => {
    const href = link.getAttribute('href');

    if (href === `./${currentPath}` || href === currentPath) {
      link.classList.add('active');
    }
  });
});
