import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const formBtn = document.querySelector('.feedback-form button');
// console.log(formBtn);

const formData = { email: '', message: '' };

restoreFormData();
function restoreFormData() {
  const restoreFormData = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (restoreFormData) {
    console.log(restoreFormData);
    form.email.value = restoreFormData.email;
    form.message.value = restoreFormData.message;
    formData.email = restoreFormData.email;
    formData.message = restoreFormData.email;
  }
  btnDisabled();
}

form.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  form.email.value = '';
  form.message.value = '';
  btnDisabled();
}

form.addEventListener('input', throttle(handlerFormInputData, 500));

function handlerFormInputData(event) {
  btnDisabled();
  // console.log(event.target.name);
  // console.log(event.target.value);

  //   console.log(event.currentTarget.elements.email.value);
  //   console.log(event.currentTarget.elements.message.value);

  formData[event.target.name] = event.target.value;
  console.log(event.target.value);
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function btnDisabled() {
  if (form.email.value !== '' && form.message.value !== '') {
    formBtn.disabled = false;
  } else {
    formBtn.disabled = true;
  }
}
