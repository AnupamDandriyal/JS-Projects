const quoteEl = document.querySelector('.quote');
const authorEl = document.querySelector('.name');
const newBTnEl = document.querySelector('.create');
let quoteTweet = quoteEl.innerText;
let autotherTweet = authorEl.innerText;
newBTnEl.addEventListener('click', () => {
  generateQuote();
})
async function generateQuote() {
   let response = await fetch(`https://type.fit/api/quotes`);
  let data = await response.json();
  let quote = data[Math.floor(Math.random()* data.length)]
  /* console.log(quote);
  console.log(quote.author.slice(0,-10)) */
  quoteTweet = quote.text;
  autotherTweet = quote.author.slice(0, -10);
  quoteEl.innerHTML =`"${quote.text}"`;
  authorEl.innerHTML = quote.author.slice(0,-10)
}


function tweet() {
  window.open(`https://twitter.com/intent/tweet?text=${quoteTweet}---by: ${autotherTweet}`,"Tweet Window")
}