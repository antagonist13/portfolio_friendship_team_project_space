import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { postData } from './portfolio-api';

const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const localStorageEmailKey = 'user-email';
const localStorageCommentKey = 'user-comment';

const form = document.querySelector('.footer-form');
const emailInput = document.getElementById('user-email');
const commentInput = document.getElementById('user-comment');
const inputFields = document.querySelector('.form-fields');
const backdrop = document.querySelector('.backdrop');

loadFormData();

emailInput.addEventListener('input', validateEmail);

commentInput.addEventListener('input', validateComment);

form.addEventListener('submit', submitForm);

form.addEventListener('input', e => {
  const email = emailInput.value;
  const comment = commentInput.value;

  saveFormData(email, comment);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    backdrop.classList.remove('is-open');
  }
});

backdrop.addEventListener('click', e => {
  if (e.target === backdrop || e.target.closest('.modal-close-btn')) {
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

function validateComment() {
  if (commentInput.value.trim().length >= 3) {
    commentInput.classList.remove('invalid');
    commentInput.classList.add('valid');
  } else {
    commentInput.classList.remove('valid');
    commentInput.classList.add('invalid');
  }
}

async function submitForm(e) {
  e.preventDefault();

  const emailValue = e.target.elements.userEmail.value.trim().toLowerCase();
  const commentlValue = e.target.elements.userComment.value.trim();

  const userData = {
    email: emailValue,
    comment: commentlValue,
  };

  await postData(userData)
    .then(() => {
      clearFormData();
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
  commentInput.classList.remove('valid');
  form.reset();
}

function saveFormData(emailValue, commentlValue) {
  localStorage.setItem(localStorageEmailKey, emailValue);
  localStorage.setItem(localStorageCommentKey, commentlValue);
}

function loadFormData() {
  emailInput.value = localStorage.getItem(localStorageEmailKey) ?? '';
  commentInput.value = localStorage.getItem(localStorageCommentKey) ?? '';
}

function clearFormData() {
  localStorage.removeItem(localStorageEmailKey);
  localStorage.removeItem(localStorageCommentKey);
}
