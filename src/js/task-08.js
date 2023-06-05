const form = document.querySelector('.login-form');
const emailInput = document.getElementsByName('email')[0];
const passwordInput = document.getElementsByName('password')[0];
const submitButton = document.getElementsByTagName('button')[0];
let obj = {};

form.addEventListener('submit', e => {
  e.preventDefault();
});

submitButton.addEventListener('click', () => {
  if (emailInput.value === '' || passwordInput.value === '') {
    alert('All fields must be filled in');
  } else {
    obj = {
      email: emailInput.value,
      password: passwordInput.value
    };
    
    console.log(obj);
    form.reset();
  }
});

