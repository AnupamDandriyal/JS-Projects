const gridItemsEl = document.querySelector('.griditems');
function createGrid() {
  for (let i = 0; i < 30; i++){
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');
    gridItemsEl.appendChild(itemEl);
  }
}

createGrid();


function randomColors() {
  const chars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  let colorCode = "";
  for (let i = 0; i < 6; i++){
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars[randomNum]
  }
  return(`#${colorCode}`);
}



function fillColors() {
  const item = document.querySelectorAll('.item').forEach((item) => {
    const val = randomColors();
    item.innerText = val;
    item.style.background= `${val}`
  });
}

fillColors();