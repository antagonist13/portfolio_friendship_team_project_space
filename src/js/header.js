const profile = document.getElementById("profile")

document.getElementById("profile-link").addEventListener("click", function(event) {
    event.preventDefault();
    profile.classList.toggle("active");
  
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
const dropdownItem = document.querySelectorAll(".menu-nav-item")
dropdownItem.forEach((item) => {
  item.addEventListener('click', () => {

    profile.classList.toggle("active");
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
})

  
    const refs = {
      openModalBtn: document.querySelector('[data-menu-open]'),
      closeModalBtn: document.querySelector('[data-menu-close]'),
      modal: document.querySelector('[data-menu]'),
      navItemList: document.querySelectorAll(".burger-nav-item"),
      orderBtn: document.querySelector(".burger-order-button")
};
    refs.openModalBtn.addEventListener('click', modaleOpen);
    refs.closeModalBtn.addEventListener('click', modaleClose);
    
    // refs.modal.addEventListener('click', toggleModal);
    function modaleOpen() {
      refs.modal.classList.remove('visually-hidden');
}
    function modaleClose() {
      refs.modal.classList.add('visually-hidden');
}
  
refs.navItemList.forEach((item) => {
  item.addEventListener('click', modaleClose);
})
 refs.orderBtn.addEventListener('click', modaleClose)
