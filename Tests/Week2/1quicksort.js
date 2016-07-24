"use strict"

var testArr = [3,8,2,5,1,4,7,6];
var count = 0;

// Partition
let partition = (arr, startIndex, endIndex) => {
  let l = startIndex || 0;
  let r = endIndex || (arr.length-1);
  count = count + (r-l-1);
  let pivot = arr[l];
  let i = l+1
  console.log('partition called', count, pivot,l, r, arr);


  for (var j=l+1; j<=r; j++){
    // console.log("pivot, i, j, arr", pivot, i, j, arr);
    if(arr[j]<pivot){
      arr = swap (i, j, arr);
      console.log("Swapped!", i, j, arr)
      i++;
    } else{
      console.log("No Change", i, j, arr)
    }
  }
  //put pivot in correct location
  swap (l, i-1, arr);
  console.log("move pivot, i, j, arr", pivot, i, j, arr);

  return i;
}

let swap = (leftIndex, rightIndex, array) =>{
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
  return array;

}

var quickSort = function(array, p, r) {
  console.log("quicksort called", p, r, array);
  if(r-p>1){
    var q = partition(array, p, r);
    quickSort(array, p, q - 1);
    quickSort(array, q, r);
  }else{
    return array;
  }
}

// var array = [3,8,2,5,1,4,7,6];
// var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var array = [3,9,8,4,6,10,2,5,7,1];
quickSort(array, 0, (array.length - 1));

console.log("Count =",count);
