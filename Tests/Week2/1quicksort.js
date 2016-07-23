"use strict"

var testArr = [3,8,2,5,1,4,7,6];

// Partition
let partition = (arr, startIndex, endIndex) => {
  let l = startIndex || 0;
  let r = endIndex || (arr.length-1);
  console.log('start', arr, l, r);
  if((r-l)<=1){return i;}

  let pivot = arr[l];
  let i = l+1

  for (var j=l+1; j<=r; j++){
    console.log("pivot, j, i, arr", pivot, j, i, arr);
    if(arr[j]<pivot){
      arr = swap (i, j, arr)
      i++;
    }
  }
  //put pivot in correct location
  swap (l, i-1, arr);
  console.log("pivot, j, i, arr", pivot, j, i, arr);
  return i;
}

let swap = (leftIndex, rightIndex, array) =>{
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
  console.log("Swap!")
  return array;

}

var quickSort = function(array, p, r) {
  if(p < r){
    var q = partition(array, p, r);
    quickSort(array, p, q - 1);
    quickSort(array, q + 1, r);
  }
  return array;
}

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var q = partition(array, 0, array.length - 1);
console.log(q);
// 4
console.log(quickSort(array, 0, array.length - 1));
// [ 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 14 ]
