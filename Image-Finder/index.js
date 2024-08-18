const search = document.querySelector('.search');
const imgContainer = document.querySelector('.imgContainer');
const container = document.querySelector('.container');
const content = document.querySelector('.content');
const input = document.querySelector('input');
const more = document.querySelector('.more');
let page = 1;
search.addEventListener('click', (event) => {
  event.preventDefault();
  getImages();  
})

input.addEventListener('keyup', () => {
  imgContainer.innerHTML = '';
  more.style.display= 'none'
})
async function getImages() {
  const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${input.value}&client_id=VxMOF5N1IlYwUu64dnVq1aZZaDFieXCIXtuhZNiFYNM&per_page=9`);
  const data = await response.json();
  const results = data.results;
  results.map((result) => {
    const img = document.createElement('img');
    img.src = result.urls.small;
    const link = document.createElement('a');
    link.href = result.links.html; 
    link.target = '_blank';
    link.appendChild(img);
    imgContainer.appendChild(link);
    more.style.display = 'block'
  })
}


more.addEventListener('click', () => {
  page++;
  getImages();
})

   /*  for (let i = 0; i < 9; i++){
      let img = document.createElement('img');
      img.src = results.urls.regular
      imgContainer.appendChild(img)
    }
    let addBtn = document.querySelector('.more');
    if (!addBtn) {
      addBtn = document.createElement('button');
      addBtn.className = 'more';
      addBtn.innerHTML = 'More';
      container.appendChild(addBtn);
    }
    addBtn.addEventListener('click', () => {
      for (let i = 0; i < 6; i++){
        let img = document.createElement('img');
        imgContainer.appendChild(img)
      }
    }) */


/* 
VxMOF5N1IlYwUu64dnVq1aZZaDFieXCIXtuhZNiFYNM

https://api.unsplash.com/search/photos?page=1&query=office&client_id=VxMOF5N1IlYwUu64dnVq1aZZaDFieXCIXtuhZNiFYNM */