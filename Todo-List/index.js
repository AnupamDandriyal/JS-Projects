const addbtn = document.querySelector('.btn');
const notetext = document.querySelector('input');
const notes = document.querySelector('.notes');



addbtn.addEventListener('click', () => {
  let newnote = document.createElement('div')
  newnote.className = 'item';
  let msgtext = document.createElement('p');
  msgtext.className = 'msg';
  msgtext.innerHTML = notetext.value;
  let close = document.createElement('span');
  close.className = 'delete';
  close.innerHTML = `&times;`;
  let bullet = document.createElement('span');
  bullet.className = 'point';
  bullet.innerHTML = `&bullet;`
  newnote.appendChild(bullet);
  newnote.appendChild(msgtext);
  newnote.appendChild(close);
  notes.appendChild(newnote);
  saveData()
  close.addEventListener('click', () => {
    newnote.remove();
    localStorage.removeItem('itemdata')
    saveData();
  });
  msgtext.addEventListener('click', () => {
    msgtext.style.textDecoration = 'line-through';
    bullet.innerHTML = `&check;`
    bullet.style.color = 'green';
    saveData();
  });

  setTimeout(() => {
    notetext.value = ''
  }, 500);

});


function saveData() {
  localStorage.setItem('itemdata',notes.innerHTML)
}

showData();
function showData() {
  notes.innerHTML = localStorage.getItem('itemdata');
  
  
  document.querySelectorAll('.item').forEach((newnote) => {
    let msgtext = newnote.querySelector('.msg');
    let close = newnote.querySelector('.delete');
    let bullet = newnote.querySelector('.point');

    close.addEventListener('click', () => {
      newnote.remove();
      saveData();
    });

    msgtext.addEventListener('click', () => {
      msgtext.style.textDecoration = 'line-through';
      bullet.innerHTML = `&check;`;  
      bullet.style.color = 'green';
      saveData();
    });
  });
}




/* 
function showData() {
  notes.innerHTML = localStorage.getItem('itemdata');

  document.querySelectorAll('.item').forEach((items) => {
    let deleteEl = items.querySelectorAll('.delete');
    let msgEl = items.querySelector('.msg');
    let bulletEl = items.querySelector('.point');
    deleteEl.addEventListener('click', () => {
      items.remove();
      saveData();
    });

    msgEl.addEventListener('click', () => {
      msgtext.style.textDecoration = 'line-through';
      bulletEl.innerHTML = '&check;';
      bulletEl.style.color = 'green';
        saveData();
    })
  });
  
} */