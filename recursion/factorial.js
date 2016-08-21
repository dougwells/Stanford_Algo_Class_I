"use strict"

function factorial(n){
  if(n === 0){return 1;}
  if(n<0){return "n must be 0 or greater";}
  return n*factorial(n-1);
}

console.log(factorial(3));
