"use strict"
let origArr = [3,1,8,2,5,4,6];
var newArr = [];
var pivot = 1;

let sort = (arr) => {
  //set up
  console.log("new Array length", newArr.length)
  if (newArr.length ===0){
    pivot = arr.shift();
    newArr.unshift(pivot);
    console.log("in setup. pivot, newArr= ", pivot, newArr);
  }

  //exit
  if (arr.length ===0){
    console.log("In exit: pivot, original, new", pivot, arr, newArr);
    return newArr;
  }

  //recurse and compare
  let compare = arr.shift()
  if(pivot>compare){
    newArr.unshift(compare);
  }else{
    newArr.push(compare);
  }
  console.log("In recurse: pivot, original, new", pivot, arr, newArr);
  sort(arr);
}

var finArr = sort(origArr);
console.log("final array", finArr);
