import '../CSS/styles.css';

const email = document.getElementById('mail');

const form = document.querySelector('form');

email.addEventListener('input', (e) => {
  if (email.validity.valueMissing) {
    email.setCustomValidity('Please enter an email!');
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity('Email must have an @ symbol');
  } else if (email.validity.tooShort) {
    email.setCustomValidity('Email must be at least 10 characters.');
  } else {
    email.setCustomValidity('');
  }
});

form.addEventListener('submit', (e) => {
  if (email.validity.valueMissing) {
    email.setCustomValidity('Please enter an email!');
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity('Not a valid email!');
  } else if (email.validity.tooShort) {
    email.setCustomValidity('Email must be at least 10 characters!');
  } else {
    email.setCustomValidity('');
  }
  e.preventDefault();
});
