import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard } from 'swiper/modules';

const prodPrev = document.querySelector('.project-swiper-button-prev');
const prodNext = document.querySelector('.project-swiper-button-next');

const swiper = new Swiper('.project-swiper', {
  direction: 'horizontal',
  modules: [Keyboard],
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  speed: 400,
  spaceBetween: 100,
});

prodPrev.addEventListener('click', () => {
  swiper.slidePrev().hideOnClick;
});

prodNext.addEventListener('click', () => {
  swiper.slideNext();
});

swiper.on('fromEdge', () => {
  prodPrev.classList.remove('project-btn-swap-disable');
  prodNext.classList.remove('project-btn-swap-disable');
});

swiper.on('reachBeginning', () => {
  prodPrev.classList.add('project-btn-swap-disable');
  prodNext.classList.remove('project-btn-swap-disable');
});

swiper.on('reachEnd', () => {
  prodNext.classList.add('project-btn-swap-disable');
  prodPrev.classList.remove('project-btn-swap-disable');
});
