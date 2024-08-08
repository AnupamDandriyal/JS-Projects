const date = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
document.querySelector('.day').innerHTML = days[date.getDay()]
document.querySelector('.month').innerHTML = months[date.getMonth()];
document.querySelector('.date').innerHTML = date.getDate();
document.querySelector('.year').innerHTML = date.getFullYear();