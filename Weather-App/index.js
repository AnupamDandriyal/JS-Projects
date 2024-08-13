/* 97263802bf31168f6d49483f36063d73 */



/* https://api.openweathermap.org/data/2.5/weather?q={Haridwar}&appid={97263802bf31168f6d49483f36063d73} */


/* https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=97263802bf31168f6d49483f36063d73


http://api.openweathermap.org/geo/1.0/direct?q=haridwar&limit=5&appid=97263802bf31168f6d49483f36063d73 */

const inputcity = document.querySelector('input');
const search = document.querySelector('.search');
const city = document.querySelector('.location');
const weatherimg = document.querySelector('.weathertype');
const temp = document.querySelector('.tempvalue');
const humid = document.querySelector('.climatevalue');
const wind = document.querySelector('.speedvalue');

search.addEventListener('click', () => {
  city.innerHTML = inputcity.value;
  getWeather();
  setTimeout(() => {
    inputcity.value = '';
  },3000)
})

let lat;
let lon;
async function getcoordinates() {

  let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputcity.value}&limit=5&appid=97263802bf31168f6d49483f36063d73`);
  let data = await response.json();
  lat = (data[0].lat).toFixed(2);
  lon = (data[0].lon).toFixed(2);
/*   console.log(lat);
  console.log(lon);  */
}

async function getWeather() {
  await getcoordinates();
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=97263802bf31168f6d49483f36063d73`);
  let data = await response.json();
  temp.innerHTML = `${Math.ceil((data.main.temp) / 10)}&deg;`;
  console.log(data.weather[0].main)
  weatherimg.src = `/Weather-App/images/${data.weather[0].main}.png`
  humid.innerHTML = `${data.main.humidity}%`;
  wind.innerHTML = `${data.wind.speed} km/hr`
}
