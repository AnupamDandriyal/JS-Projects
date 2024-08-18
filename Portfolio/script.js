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
  
  testimonial.addEventListener('click', () => {
    const stars = testimonial.querySelectorAll('i');
    stars.forEach((item, index) => {
      setTimeout(() => {
        item.style.color = 'yellow';
        item.style.boxShadow = '0 0 15px gold'
      }, index * 500); // Increase delay for each star
    });
  });
})
  