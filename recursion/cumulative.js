"use strict"

function cumulative(n){
  if(n===0){
    return 0;
  }else{
    return n+cumulative(n-1);
  }
}

console.log(cumulative(10));
