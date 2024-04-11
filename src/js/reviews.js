import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard } from 'swiper/modules';

const btnPrev = document.querySelector('.swiper-button-prev');
const btnNext = document.querySelector('.swiper-button-next');

const swiper = new Swiper('.swiper', {
  modules: [Keyboard],
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  speed: 400,
  spaceBetween: 100,
});

btnPrev.addEventListener('click', () => {
  swiper.slidePrev();
  if (btnNext.classList.contains('disabled_btn')) {
    btnNext.classList.remove('disabled_btn');
  }
});
btnNext.addEventListener('click', () => {
  swiper.slideNext();
  if (btnPrev.classList.contains('disabled_btn')) {
    btnPrev.classList.remove('disabled_btn');
  }
});

// swiper.on('activeIndexChange', () => {
//   btnPrev.classList.remove('disabled_btn');
// });
  swiper.on('reachBeginning', () => {
    btnPrev.classList.add('disabled_btn');
    btnNext.classList.remove('disabled_btn');
  });

swiper.on('reachEnd', () => {
  btnNext.classList.add('disabled_btn');
  btnPrev.classList.remove('disabled_btn');
});
