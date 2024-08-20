let profiles = ['Front-End Developer', 'UI/UX Designer','Web Developer', 'Adobe Specilaist', 'Tech Support Specialist'];
const job = document.querySelector('.job');
let i = 0;  /* msgindex */
let contentindex = 0;  /* msgContentIndex */
updateProfiles()
function updateProfiles() {
  contentindex++;
  if (i != profiles.length) {
    job.innerHTML = profiles[i].slice(0, contentindex);
    if (contentindex === profiles[i].length) {
      i++;
      contentindex = 0;
    }
    setTimeout(updateProfiles, 450);
  }
  if (i === profiles.length) {
    i = 0;
  }
}
 
const testimonialItem = document.querySelectorAll('.testimonialitem');


testimonialItem.forEach((testimonial) => {
  
  testimonial.addEventListener('mousemove', () => {
    const stars = testimonial.querySelectorAll('i');
    stars.forEach((item, index) => {
      setTimeout(() => {
        item.style.color = 'yellow';
        item.style.boxShadow = '0 0 15px gold'
      }, index * 500); 
    });
  });
})
  

const navlinks = document.querySelectorAll('.navbar .right li a');
function setActive() {
  navlinks.forEach((item) => {
    item.parentElement.classList.remove('active');
    this.parentElement.classList.add('active')
  })
}

navlinks.forEach((item) => {
  item.addEventListener('click', setActive);
})


const close = document.querySelector('.close');
const navRight = document.querySelector('.navcontent .right')
close.addEventListener('click', () => {
  navRight.style.right = '-182px'
})



const open = document.querySelector('.open');
open.addEventListener('click', () => {
  navRight.style.right = '-10px'
})