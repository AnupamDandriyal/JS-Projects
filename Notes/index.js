const notes = document.querySelector('.notes');
const createEl = document.querySelector('.create');


showNotes();
createEl.addEventListener('click', () => {
  addNewNote();
})



function addNewNote(content = '') {
  const newItem = document.createElement('div');
  newItem.className = 'item';
  const newNote = document.createElement('textarea');
  newNote.className = 'input';
  newNote.rows = 10;
  newNote.cols = 40;
  newNote.value = content;
  const delImg = document.createElement('img');
  delImg.src = `/Notes/images/delete.png`;
  delImg.className = 'delete';

  newItem.appendChild(newNote);
  newItem.appendChild(delImg);
  notes.appendChild(newItem);

  newNote.addEventListener('input', () => {
    saveNotes();
  })
  localStorage.setItem('notesData',notes.innerHTML)
  delImg.addEventListener('click', () => {
    newItem.remove();
    localStorage.setItem('notesData', notes.innerHTML);
    saveNotes();
  });
  saveNotes();
}


function saveNotes() {
  const notesData = [];
  document.querySelectorAll('.item').forEach((item) => {
    notesData.push(item.querySelector('textarea').value)
  });
  localStorage.setItem('notesData',JSON.stringify(notesData))
}

function showNotes() {
  try {
    const data = localStorage.getItem('notesData');
    const notesArray = JSON.parse(data);
    notesArray.forEach(noteContent =>
      addNewNote(noteContent)
    )
  }
  catch {
    console.log('No Previous Data is present')
  }  
}


