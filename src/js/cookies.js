document.addEventListener('DOMContentLoaded', function () {
  const accept = document.querySelector('.cookies-accept');
  const decline = document.querySelector('.cookies-decline');
  const container = document.querySelector('.cookies-wrap');
  const closeBtn = document.querySelector('.close-cookies-modal-btn');

  closeBtn.addEventListener('click', () => {
    container.style.display = 'none';
  });

  let value = localStorage.getItem('cookies-privacy');

  if (value === 'false' || value === null) {
    container.style.display = 'flex';
  }

  if (accept) {
    accept.addEventListener('click', () => {
      localStorage.setItem('cookies-privacy', true);
      container.style.display = 'none';
    });
  }

  if (decline) {
    decline.addEventListener('click', () => {
      localStorage.setItem('cookies-privacy', false);
      container.style.display = 'none';
    });
  }
});
