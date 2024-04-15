const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // видаляє у кнопки клас btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавляє до кнопки клас btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутці даних сторінки
    window.addEventListener('scroll', () => {
      // визначаємо величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // якщо сторінка прокручена больше ніж на 400px, то робимо кнопку видимою, інакше ховаємо
      scrollY > 400 ? this.show() : this.hide();
    });
    // при кліку по кнопці .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переходимо на початок сторінки
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};
btnUp.addEventListener();
