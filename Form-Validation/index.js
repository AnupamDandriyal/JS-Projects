let nameError = document.querySelector('.name-error');
let phoneError = document.querySelector('.phone-error');
let mailError = document.querySelector('.email-error');
let msgError = document.querySelector('.message-error');
let submitError = document.querySelector('.submit-error');


function validateName() {
  const name = document.getElementById('name').value;
  if (name.length === 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-za-z]*$/)) {
    nameError.innerHTML = 'Full Name is required';
    return false;
  }

  nameError.innerHTML = `<i class="fa fa-check-circle"></i>`
  return true;
}

function validatePhone() {
  const phone = document.getElementById('phone').value;
  if (phone.length < 10) {
    phoneError.innerHTML = 'Invalid Number';
    return false
  }
  phoneError.innerHTML = `<i class="fa fa-check-circle"></i>`
  return true
}

function validateMail() {
  const mail = document.getElementById('mail').value;
  if(mail.includes('@') && mail.includes('.com')) {
    mailError.innerHTML = `<i class="fa fa-check-circle"></i>`
    return true;
  }
  if (mail.includes('')) {
    mailError.innerHTML = 'Incorrect format';
    return false
  }
}


function validateMsg() {
  const msg = document.getElementById('msg').value;
  let length = 30;
  let left = length - msg.length;
  if (left>0) {
    msgError.innerHTML = `${left} more characters are required`;
    return false
  }
  msgError.innerHTML = `<i class="fa fa-check-circle"></i>`
  return true
}


function validateForm() {
  alert('Your form is succefully submitted');
  if (!validateName() || !validatePhone() || !validateMail() || !validateMsg()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix the error!';
    setTimeout(() => {
      submitError.style.display = 'none';
    },3000)
    return false;
  }
}