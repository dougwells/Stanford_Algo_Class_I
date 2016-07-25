"use strict"

let testArr = [3,1,4,2,8,5,6,7];
var newArr = [];

var double = (arr) =>{
  if (arr.length <2) {
    newArr.push(2*arr[0]);
    console.log("double, new", 2*arr[0], newArr);
    return newArr;
  }

  let p = (arr.length)/2;
  let leftArr = arr.slice(0,p)
  let rightArr = arr.slice(p, arr.length)
  console.log("Left/Right", leftArr, rightArr)
  double(leftArr);
  double(rightArr);
  return newArr;
}

console.log(double(testArr));
