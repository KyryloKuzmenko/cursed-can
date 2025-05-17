import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.gameplay-btn-prev');
  const nextBtn = document.querySelector('.gameplay-btn-next');

  const swiper = new Swiper('.gameplay-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 35,
    initialSlide: 1,
    breakpoints: {
      1024: {
        loop: false,
      },
    },
  });

  prevBtn.addEventListener('click', () => {
    swiper.slidePrev();
  });

  nextBtn.addEventListener('click', () => {
    swiper.slideNext();
  });
});
