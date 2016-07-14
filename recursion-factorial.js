"use strict"
let product, current = 1;
let previous, sum = 0

let factorial = (n) => {
  if(n>0) {
    product = product*n;
    factorial(n-1);
  }else{
    return product;
  }
}

let factorialShort = (n) => {
  if (n<2) {return 1}
    return n*factorialShort(n-1)
}

let fibonacci = (n, max) => {
  if (n=1){previous = 1; return previous}
  if (n<max){

    return console.log(sum);
  } else{
    console.log('end');
  }
  }

factorial(7);
console.log('factorialShort= ', factorialShort(7));
fibonacci(0,7);
