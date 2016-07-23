"use strict"

var testArr = [3,8,2,5,1,4,7,6];

// Partition
let partition = (arr, startIndex, endIndex) => {
  console.log('start', arr, startIndex, endIndex);
  let l = startIndex || 0;
  let r = endIndex || arr.length
  let base = r-l;
  let pivot = arr[l];
  let i = l+1
  if(base <2){return arr;}
  for (var j=l+1; j<=arr.length; j++){
    console.log("pivot, j, i, arr", pivot, j, i, arr);
    if(arr[j]<pivot){
      arr = swap (i, j, arr)
      i++;
    }
  }
  swap (l, i-1, arr);
  console.log("pivot, j, i, arr", pivot, j, i, arr);
  partition(arr, i, arr.length-1)
  partition(arr, 0, i-2);
  return arr;
}

let swap = (leftIndex, rightIndex, array) =>{
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
  console.log("Swap!")
  return array;

}

console.log(partition(testArr, 0, 0));
