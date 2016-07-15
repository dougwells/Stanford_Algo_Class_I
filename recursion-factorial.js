"use strict"
let product=1;

let factorial = (n) => {
  if(n>0) {
    product = product*n;
    factorial(n-1);
  }else{
    return console.log(product);
  }
}

let factorialShort = (n) => {
  if (n<2) {return 1}
    return n*factorialShort(n-1)
}


factorial(7);
console.log('factorialShort= ', factorialShort(7));
