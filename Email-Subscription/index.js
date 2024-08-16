const submit = document.querySelector('.submit')
const mail = document.getElementById('mail');
const submission = document.querySelector('.submission');
const scriptURL = 'https://script.google.com/macros/s/AKfycbxBptwBcWv4Ed-Apmvdlkw3_i0AQpLSbWsboUr1dATbXZVpACJM-Z_l5qol3UwAg4aGlw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      submission.innerHTML = 'Thank You For Subscribing Us!';
      setTimeout(() => {
        submission.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
