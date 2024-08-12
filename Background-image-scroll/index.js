const bg = document.querySelector('.bg-img');
window.addEventListener('scroll', () => {
  updateImage();
})


function updateImage() {
  bg.style.opacity = 1 - window.pageYOffset / 500;
  bg.style.backgroundSize  = 160 - window.pageYOffset/10 + '%';

}