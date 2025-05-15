document.addEventListener('DOMContentLoaded', () => {
  const menuOpenBtn = document.querySelector('.header-menu-open-btn');
  const closeMenuBtn = document.querySelector('.close-menu-btn');
  const backdrop = document.querySelector('.backdrop');
  const menuLinks = document.querySelectorAll(
    '.backdrop-link, hidden-menu-link'
  );

  function toggleMenu(show) {
    backdrop.classList.toggle('show', show);
    menuOpenBtn.style.display = show ? 'none' : 'block';
    closeMenuBtn.style.display = show ? 'block' : 'none';
    document.body.style.overflow = show ? 'hidden' : 'auto';
  }

  menuOpenBtn?.addEventListener('click', () => toggleMenu(true));
  closeMenuBtn?.addEventListener('click', () => toggleMenu(false));
  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) toggleMenu(false);
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        const yOffset = -60;
        const y =
          targetEl.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        toggleMenu(false);
      }
    });
  });

  function highlightMenu() {
    const sections = document.querySelectorAll('section[id], article[id]');
    const scrollY = window.scrollY + 66;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document
          .querySelectorAll('.backdrop-link, .hidden-menu-link')
          .forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
      }
    });
  }

  window.addEventListener('scroll', highlightMenu);
  highlightMenu();
});
