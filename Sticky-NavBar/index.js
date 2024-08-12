const limit= 770; 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
 /*  console.log(`X = ${window.scrollX}`);
  console.log(`Y = ${window.scrollY}`); */
    if (window.scrollY > limit) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});