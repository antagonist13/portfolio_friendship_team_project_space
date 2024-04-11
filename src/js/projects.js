// import Swiper from 'swiper';
// import 'swiper/css';
// import { Keyboard } from 'swiper/modules';

// const prodPrev = document.querySelector(".swiper-button-prev-rev")
// const prodNext = document.querySelector(".swiper-button-next-right")

// const swiperOn = new Swiper('.swiper-on', {
//   modules: [Keyboard],
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
//   speed: 400,
//   spaceBetween: 100,
// });

// prodPrev.addEventListener("click", () => {
//     swiperOn.slidePrev();
//     if (prodNext.classList.contains("project-btn-swap-disable")) {
//         prodNext.classList.remove("project-btn-swap-disable")
//     }
// })

// prodNext.addEventListener("click", () => {
//     swiperOn.slideNext();
//     if (prodPrev.classList.contains("project-btn-swap-disable")) {
//         prodPrev.classList.remove("project-btn-swap-disable")
//     }
// })


// swiperOn.on('reachBeginning', () => {
//     btnPrev.classList.add('project-btn-swap-disable');
//     btnNext.classList.remove('project-btn-swap-disable');
//   });

//   swiperOn.on('reachEnd', () => {
//   btnNext.classList.add('project-btn-swap-disable');
//   btnPrev.classList.remove('project-btn-swap-disable');
// });



// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

// // Импортируем необходимый модуль Swiper
// import { KeyboardNavigation } from 'swiper';

// // Инициализируем Swiper с необходимыми модулями
// const swiper = new Swiper('.swiper-on', {
//   modules: [KeyboardNavigation], // Инициализируем Swiper с модулем KeyboardNavigation
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
//   speed: 400,
//   spaceBetween: 100,
// });

// const prodPrev = document.querySelector(".swiper-button-prev-rev")
// const prodNext = document.querySelector(".swiper-button-next-right")

// prodPrev.addEventListener("click", () => {
//     swiper.slidePrev();
//     if (prodNext.classList.contains("project-btn-swap-disable")) {
//         prodNext.classList.remove("project-btn-swap-disable")
//     }
// })

// prodNext.addEventListener("click", () => {
//     swiper.slideNext();
//     if (prodPrev.classList.contains("project-btn-swap-disable")) {
//         prodPrev.classList.remove("project-btn-swap-disable")
//     }
// })

// swiper.on('reachBeginning', () => {
//     prodPrev.classList.add('project-btn-swap-disable');
//     prodNext.classList.remove('project-btn-swap-disable');
// });

// swiper.on('reachEnd', () => {
//     prodNext.classList.add('project-btn-swap-disable');
//     prodPrev.classList.remove('project-btn-swap-disable');
// });