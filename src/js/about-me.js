import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard } from 'swiper/modules';
import { Mousewheel } from 'swiper/modules';

//============== Accordion ==================

new Accordion('.about-me-accordion-container', {
  openOnInit: [0],
  showMultiple: true,
});

const accordionBtns = document.querySelectorAll('.about-me-ac-trigger');

accordionBtns.forEach(btn => {
  btn.addEventListener('click', onAccordionBtn);
});
// /portfolio_friendship_team_project_space/assets/sprite-4758f5c0.svg#icon-arrow-up
function onAccordionBtn(event) {
  const divBtn = event.currentTarget.firstElementChild;
  const divBtnSvg = divBtn.firstElementChild
  const statusBtn = divBtn.dataset.status;
    divBtnSvg.classList.toggle('rotate');
  if (statusBtn === 'open') {
    divBtn.dataset.status = 'close';
  } 
  if (statusBtn === 'close') {
    divBtn.dataset.status = 'open';
  }
}

//================= Swipere ==================

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
  slideActiveClass: 'about-me-swiper-slide-active',
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
