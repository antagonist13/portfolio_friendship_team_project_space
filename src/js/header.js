

document.getElementById("profile-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("profile").classList.toggle("active");
  
    const dropdown = document.getElementById("dropdown");
    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
      dropdown.style.opacity = 0;
    } else {
      dropdown.classList.add("active");
      setTimeout(() => {
        dropdown.style.opacity = 1;
      }, 10); 
    }
  });



  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-menu-open]'),
      closeModalBtn: document.querySelector('[data-menu-close]'),
      modal: document.querySelector('[data-menu]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('visually-hidden');
    }
  })(); 