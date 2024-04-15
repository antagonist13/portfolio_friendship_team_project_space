const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', function () {
  if (pageYOffset < 75) {
    scrollTop.classList.add('visually-hidden');
    return;
  }
  scrollTop.classList.remove('visually-hidden');
});
