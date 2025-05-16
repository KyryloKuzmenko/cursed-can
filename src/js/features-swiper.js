import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.gallery-btn-prev');
  const nextBtn = document.querySelector('.gallery-btn-next');

  const swiper = new Swiper('.features-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    spaceBetween: 40,
    initialSlide: 0,

    breakpoints: {
      1024: {
        slidesPerView: 'auto',
        centeredSlides: false,
      },
    },

    on: {
      afterInit(sw) {
        updateButtons(sw);
      },
      slideChange(sw) {
        updateButtons(sw);
      },
    },
  });

  function updateButtons(sw) {
    const isPrevDisabled = sw.isBeginning;
    const isNextDisabled = sw.isEnd;

    prevBtn.disabled = isPrevDisabled;
    prevBtn.querySelector('.left-arrow-not-active ').style.display =
      isPrevDisabled ? 'block' : 'none';
    prevBtn.querySelector('.left-arrow-active').style.display = isPrevDisabled
      ? 'none'
      : 'block';

    nextBtn.disabled = isNextDisabled;
    nextBtn.querySelector('.right-arrow-not-active').style.display =
      isNextDisabled ? 'block' : 'none';
    nextBtn.querySelector('.right-arrow-active').style.display = isNextDisabled
      ? 'none'
      : 'block';
  }

  prevBtn.addEventListener('click', () => {
    swiper.slidePrev();
  });

  nextBtn.addEventListener('click', () => {
    swiper.slideNext();
  });
});
