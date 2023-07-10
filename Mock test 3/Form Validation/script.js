const form = document.getElementById('myForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const passwordField = document.getElementById('password');
const ageField = document.getElementById('age');
const genderField = document.getElementById('gender');
const dateField = document.getElementById('date');
const colorField = document.getElementById('color');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
    // Submit form or perform further actions
    console.log('Form submitted successfully');
    form.reset();
  }
});

function validateForm() {
  let isValid = true;

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const passwordError = document.getElementById('passwordError');
  const ageError = document.getElementById('ageError');
  const genderError = document.getElementById('genderError');
  const dateError = document.getElementById('dateError');
  const colorError = document.getElementById('colorError');

  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  passwordError.textContent = '';
  ageError.textContent = '';
  genderError.textContent = '';
  dateError.textContent = '';
  colorError.textContent = '';

  if (nameField.value.trim() === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  if (emailField.value.trim() === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!validateEmail(emailField.value.trim())) {
    emailError.textContent = 'Invalid email format';
    isValid = false;
  }

  if (phoneField.value.trim() === '') {
    phoneError.textContent = 'Phone number is required';
    isValid = false;
  } else if (!validatePhone(phoneField.value.trim())) {
    phoneError.textContent = 'Invalid phone number format';
    isValid = false;
  }

  if (passwordField.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    isValid = false;
  }

  if (ageField.value < 18 || ageField.value > 99) {
    ageError.textContent = 'Age must be between 18 and 99';
    isValid = false;
  }

  if (genderField.value === '') {
    genderError.textContent = 'Gender is required';
    isValid = false;
  }

  if (dateField.value.trim() === '') {
    dateError.textContent = 'Date is required';
    isValid = false;
  }

  if (colorField.value.trim() === '') {
    colorError.textContent = 'Color is required';
    isValid = false;
  }

  return isValid;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
}
