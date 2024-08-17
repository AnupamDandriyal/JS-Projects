const ethereum = document.querySelector('.ethereum');
const bitcoin = document.querySelector('.bitcoin');
const dogecoin = document.querySelector('.dogecoin');


async function updateValue() {
  let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd');
  let data = await response.json();
  console.log('Working fine')
  bitcoin.innerHTML = `$${data.bitcoin.usd}`;
  ethereum.innerHTML = `$${data.ethereum.usd}`;
  dogecoin.innerHTML=`$${data.dogecoin.usd}`
  
  

}

updateValue()