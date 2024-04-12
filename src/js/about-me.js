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

const swiperAboutMe = new Swiper('.about-me-swiper', {
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
      slidesPerView: 6,
    },
  },
});

nextBtn.addEventListener('click', () => swiperAboutMe.slideNext());

// window.addEventListener('resize', () => swiperAboutMe.update());
