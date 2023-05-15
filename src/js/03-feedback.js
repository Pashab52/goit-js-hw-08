import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const formBtn = document.querySelector('.feedback-form button');

const formData = { email: '', message: '' };

const STORAGE_KEY = 'feedback-form-state';

restoreFormData();
function restoreFormData() {
  const restoreFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (restoreFormData) {
    form.email.value = restoreFormData.email;
    form.message.value = restoreFormData.message;
    formData.email = restoreFormData.email;
    formData.message = restoreFormData.message;
  }
  btnDisabled();
}

form.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.email.value = '';
  form.message.value = '';
  formData.email = '';
  formData.message = '';
  btnDisabled();
}

form.addEventListener('input', throttle(handlerFormInputData, 500));

function handlerFormInputData(event) {
  btnDisabled();
  // console.log(event.target.name);
  // console.log(event.target.value);

  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function btnDisabled() {
  if (form.email.value !== '' && form.message.value !== '') {
    formBtn.disabled = false;
  } else {
    formBtn.disabled = true;
  }
}
