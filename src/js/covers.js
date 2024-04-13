const coversEl = document.querySelector('.covers');
const imageEL = document.querySelectorAll('.covers__image');
console.log(imageEL);

const observer = new IntersectionObserver(observerCallback);

observer.observe(coversEl);

function observerCallback(entries) {
  const entry = entries[0];
  imageEL.forEach(image => {
    if (entry.isIntersecting) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}
