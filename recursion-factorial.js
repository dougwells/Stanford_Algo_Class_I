"use strict"
let recursionTree = {};
let sum = 1;


let factorial = (n) => {
  if(n>0) {
    sum = sum*n;
    factorial(n-1);
  }else{
    return console.dir(sum);

  }
}

factorial(7);
