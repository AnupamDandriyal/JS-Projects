/* console.log('Closure is a function with its lexical scope bundle')
function x() {
  let a = 200;
  function y() {
    console.log(a);
  }
  y();
}

let z = x;
console.log(z);
z();


console.log('Higher Order Function are those hich pass or return the function as paramater');
const radius = [1, 3, 4, 6];
const area = function (radius) {
  return (Math.PI * radius * radius).toFixed(2);
}

const diameter = function (radius) {
  return (radius * 2).toFixed(2);
}

const binary = function(radius){
  return radius.toString(2)
}


function calculate(logic) {
  let output = [];
  for (let i = 0; i < radius.length; i++){
    output.push(logic(radius[i]))
  }
  console.log(output)
}

calculate(area);

console.log(radius.map(diameter))

console.log('Map');
console.log(radius.map(binary));


console.log('Filter')

const Odd = function (radius) {
  return radius % 2 !=0;
}

const even = function (radius) {
  return radius % 2 === 0;
}

console.log(radius.filter(Odd));
console.log(radius.filter(even));
console.log(radius.filter((x) => x > 4));


console.log('Reduce');

const sum = radius.reduce(function (acc, curr) {
  acc += curr;
  return acc;
}, 0);
console.log(sum);

const max = radius.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(max);


const users = [
  {
    firstName: 'Anubhav', lastName: 'Sharma', age: 26
  },

  {
    firstName: 'Raghva', lastName: 'Joshi', age: 16
  },

  {
    firstName: 'Shree', lastName: 'Singhal', age: 20
  },

  {
    firstName: 'Anubhaya', lastName: 'Singh', age: 20
  },
  {
    firstName: 'Revati', lastName: 'Rao', age: 15
  },
]


console.log(users.map((x) => `${x.firstName} ${x.lastName} `));

let youngest = (users.filter((x) => x.age < 20));
console.log(youngest.sort((a,b)=>a.age-b.age))
console.log(`${youngest[0].firstName} ${youngest[0].lastName}`);


const ageGp = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  }
  else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ageGp);


const under20 = users.filter((x) => x.age < 20).map((x)=>x.firstName);
console.log(under20);

const twenty = users.filter((x) => x.age ===20).map((x) => x.firstName + " " +x.lastName );
console.log(twenty)


const fifteen = users.reduce((acc, curr) => {
  if (curr.age < 20) {
    acc.push(curr.firstName);
  }
  return acc
}, []);
console.log(fifteen); */

/* console.log("Promise is an object that represents the eventual completion of asynchronus event/funcn ");

console.log('Creating a Promise');

const cart = ['shirt', 'tie', 'belt', 'pant'];

const promise = createOrder(cart);
console.log(promise)

promise.then(function (orderId) {
  console.log(orderId);
  return orderId;
})
  .then(function (orderId) {
    console.log(cart)
    return orderSummary(orderId);
  })
  .then(function (orderId) {
   return proceedtoPayment(orderId)
  })
  .then(function (paymentInfo) {
    console.log('Payment is succesful')
  })
  .then(function (updatedWallet) {
    console.log('Your updated balance is $199')
  })
  .catch(function (err) {
  console.log(err.message)
  })
  .then(function () {
    console.log("This will be called at any cost")
  })

function orderSummary(orderId) {
  return new Promise(function (resolve, reject) {
    if (orderId === 12345) {
      resolve('Succesful')
    }
    reject('Not valid')
  })
}

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error('Cart is not valid');
      reject(err);
    }

    const orderID = 12345;
    if (orderID) {
      setTimeout(() => {
        resolve(orderID)
      },3000)
    }
  })

  return pr;
}

function proceedtoPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve('Payment Succesful')
  });
}
function validateCart(cart) {
  if (cart.length === 0) {
    return false
  }

  return true;
} */

console.log("Promise APIs");
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('P1 Success') }, 3000)
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => { reject('P2 Rejects') }, 1000)
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(()=>{resolve('P3 Success')},2000)
})

console.log(
  "Promise.all() is used for parallel/simultaneous api calls and array of promises is passed to it. It waist for all the promises to finish and then it returns the result simultaneously.But if any of the promise gets failed then promise.all() will throw an error and all other succesful/failed promises are rejected ."
);
Promise.all([p1, p2, p3]).then(result => {
  console.log(result)
}).catch(function (err){
  console.error(err)
})

console.log('Promise.allSetteled() is also used for simulatneous API calls and the best part is if any of the promise get failed in between still it will return the value of settelled(which got results) promises and error for the failed promise. It doesnot break-in between. In this also an array of promises is passed and an array of results(objects) is also returned.');
Promise.allSettled([p1, p2, p3]).then(result => {
  console.log(result)
}).catch(function (err){
  console.error(err)
})

console.log('Promise.race() also takes the array of promises and it doesnot wait for all the promise to get setteled. Irrespective of the success or failure of promise it will return the result instantly as the promise gets setteled first.');
Promise.race([p1, p2, p3]).then(result => {
  console.log(result)
}).catch(function (err){
  console.error(err)
})

console.log('Promise.any() also takes the array of promises and it just wait for the first succes so that it could return the result but if all the promises get failed then it returns the aggregated error which is basically a list of all the errors.(Success seeking API)');
Promise.any([p1, p2, p3]).then(result => {
  console.log(result)
}).catch(function (err){
  console.error(err);
  console.log(err.errors)
})

