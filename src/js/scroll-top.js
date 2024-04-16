const scrollTop = document.querySelector('.scroll-top');

function checkScrollPosition() {
  if (pageYOffset < 75 || window.innerWidth < 768) {
    scrollTop.classList.add('visually-hidden');
  } else {
    scrollTop.classList.remove('visually-hidden');
  }
}

checkScrollPosition();

window.addEventListener('scroll', () => {
  checkScrollPosition();
});

window,
  addEventListener('resize', () => {
    window.innerWidth < 768
      ? scrollTop.classList.add('visually-hidden')
      : scrollTop.classList.remove('visually-hidden');
  });
