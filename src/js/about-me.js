import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard } from 'swiper/modules';
import { Mousewheel } from 'swiper/modules';

new Accordion('.accordion-container', {
  openOnInit: [0],
  showMultiple: true,
});

const nextBtn = document.querySelector('.about-me-swiper-next');

let swiper = new Swiper('.mySwiper', {
  modules: [Keyboard, Mousewheel],
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 5,
    },
  },
});

nextBtn.addEventListener('click', () => swiper.slideNext());

window.addEventListener('resize', () => swiper.update());
