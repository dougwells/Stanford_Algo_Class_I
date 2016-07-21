"use strict";

let num = [2,2,3,4,5,6]

let addArr = (arr)=>{
  if (arr.length === 0) return 0;
  return arr.pop() + addArr(arr);
}

console.log(addArr(num));
