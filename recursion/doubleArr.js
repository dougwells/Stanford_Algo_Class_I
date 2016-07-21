"use strict"

let testArr = [3,1,4,2,8,5,6,7];
var newArr = [];

var double = (arr) =>{
  if (arr.length <2) {
    newArr.push(2*arr[0]);
    return arr[0];
  }

  let p = (arr.length)/2;
  let leftArr = arr.slice(0,p)
  let rightArr = arr.slice(p, arr.length)
  double(leftArr);
  double(rightArr);
  return newArr;
}
console.log("start", testArr);
console.log("doubled", double(testArr));
