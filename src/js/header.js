

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
  
    
    refs.modal.classList.add("visually-hidden");
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('visually-hidden');
      refs.openModalBtn.classList.toggle('visually-hidden');
      refs.closeModalBtn.classList.toggle('visually-hidden');
      
    }


    // const dropModal = refs.modal.addEventListener('click', toggleModal);
    // if (dropModal.classList.contains("visually-hidden")) {
    //   dropModal.classList.remove("visually-hidden");
    //   dropModal.style.opacity = 0;
    // } else {
    //   dropModal.classList.add("visually-hidden");
    //   setTimeout(() => {
    //     dropModal.style.opacity = 1;
    //   }, 10); 
    // }

  }) 
