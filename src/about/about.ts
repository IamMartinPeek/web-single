import './about.scss';

const formName = <HTMLInputElement>document.getElementById('name');
const formEmail = <HTMLInputElement>document.getElementById('email');
const formPhone = <HTMLInputElement>document.getElementById('phone');
const formPassword = <HTMLInputElement>document.getElementById('password');
const form = document.getElementById('contact-form');

export default function activateContactFormValidators() {
  formName.onkeyup = () => {
    if (/^[A-Za-z]{3,}$/.test(formName.value)) {
      formName.classList.remove('invalid');
      console.log("valid")
    } else {
      console.log("invalid")
      formName.classList.add('invalid');
    }
  };

  formPhone.onkeyup = () => {
    if (/^[0-9]+$/.test(formPhone.value)) {
      formPhone.classList.remove('invalid');
    } else {
      formPhone.classList.add('invalid');
    }
  };

  formEmail.onkeyup = () => {
    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formEmail.value)) {
      formEmail.classList.remove('invalid');
    } else {
      formEmail.classList.add('invalid');
    }
  };

  form.onsubmit = () => {
    let invalid = false;
    [formEmail, formName, formPhone, formPassword].forEach(input => {
      if (input.className.split(' ').indexOf('invalid') > -1 || input.value === '') {
        invalid = true;
      }
    });
    if (invalid) { return false; }
    return true;
  };
}