"use strict"
let tree = {};
let previous = 0;
let current = 0;
let sum = 1;


let fibonacci = (n, max) => {
  if(n<=max) {
    console.log(sum);
    previous = sum;
    sum = previous + current;
    current = previous

    fibonacci(n+1, max);
  }else{
    return console.log(sum);

  }
}

fibonacci(1,10);
