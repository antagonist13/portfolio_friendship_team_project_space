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
// /portfolio_friendship_team_project_space/assets/sprite-5311fca3.svg#icon-arrow-up
function onAccordionBtn(event) {
  const divBtn = event.currentTarget.firstElementChild;
  const statusBtn = divBtn.dataset.status;
  const downSvg = `<svg width="20" height="20">
                <use href="/portfolio_friendship_team_project_space/assets/sprite-dad45ecc.svg#icon-arrow-up"></use>
              </svg>`;
  const upSvg = `<svg width="20" height="20">
                <use href="/portfolio_friendship_team_project_space/assets/sprite-dad45ecc.svg#icon-arrow-up"></use>
              </svg>`;
  if (statusBtn === 'open') {
    divBtn.innerHTML = downSvg;
    divBtn.dataset.status = 'close';
  } else {
    divBtn.innerHTML = upSvg;
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
