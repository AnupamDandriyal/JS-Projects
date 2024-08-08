const BtnEL = document.querySelector('.btn');
const ImgEl = document.querySelector('.imgcontainer');
BtnEL.addEventListener('click', () => {
  for (let i = 0; i < 4; i++){
    const newImg = document.createElement('img');
    newImg.src= `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    ImgEl.appendChild(newImg)
  }
})



