import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { postData } from './portfolio-api';

const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const form = document.querySelector('.footer-form');
const emailInput = document.getElementById('user-email');
const inputFields = document.querySelector('.form-fields');
const backdrop = document.querySelector('.backdrop');
const closeButton = document.querySelector('.modal-close-btn');

emailInput.addEventListener('input', validateEmail);
form.addEventListener('submit', submitForm);
closeButton.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    backdrop.classList.remove('is-open');
  }
});

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) {
    closeModal();
  }
});

function validateEmail() {
  if (emailRegex.test(emailInput.value.trim())) {
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
    inputFields.dataset.status = 'Success!';
    inputFields.style.setProperty('--status-color', '#3cbc81');
  } else {
    emailInput.classList.remove('valid');
    emailInput.classList.add('invalid');
    inputFields.dataset.status = 'Invalid email, try again';
    inputFields.style.setProperty('--status-color', '#e74a3b');
  }
}

async function submitForm(e) {
  e.preventDefault();

  const emailValue = e.target.elements.userEmail.value;
  const commentlValue = e.target.elements.userComment.value;

  const userData = {
    email: emailValue.trim().toLowerCase(),
    comment: commentlValue.trim(),
  };

  await postData(userData)
    .then(() => {
      resetForm();
      backdrop.classList.add('is-open');
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: 'An error occurred while sending the request. Try again.',
      });
    });
}

function closeModal() {
  resetForm();
  backdrop.classList.remove('is-open');
}

function resetForm() {
  inputFields.dataset.status = '';
  emailInput.classList.remove('valid');
  form.reset();
}
