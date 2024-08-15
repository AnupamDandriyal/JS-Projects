const toastBoxEl = document.getElementById('toastBox')


showToast();
function showToast() {
  document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      let toast = document.createElement('div');
      toast.className = btn.innerText;
      toast.classList.add('toast');
      let borderclr;
      if (btn.innerText === 'Success') {
        toast.innerHTML = `
                            <i class="fa fa-check-circle"></i>
                            <p>Succesfully submitted!</p>
                            `;
        toast.style.color = 'green';
        borderclr= 'green';
      }
      else if (btn.innerText === 'Error') {
        toast.innerHTML = `
                            <i class="fa fa-exclamation-circle"></i>
                            <p>Invalid input, check again</p>
                            `;
        toast.style.color = 'sandybrown';
        borderclr='sandybrown'
      }

      else {
        toast.innerHTML = ` 
                            <i class="fa fa-times-circle"></i>
                            <p>Please fix the error!</p>
                             `;
        toast.style.color = 'red';
        borderclr = 'red';
      }
      
      toastBoxEl.appendChild(toast);
      setTimeout(() => {
        toast.remove()
      }, 5000) 
      
    })
    
  })
  
}


