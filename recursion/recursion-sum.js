"use strict"

var shortArr = [1,2,3,4,10];


let sumArr = (arr,numElem) => {
  if(numElem<0) {return 0};
  return arr[numElem]+sumArr(arr, numElem-1);
}

console.log(sumArr(shortArr,4));
