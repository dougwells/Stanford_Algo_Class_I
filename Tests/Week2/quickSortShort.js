"use strict"

var fs = require('fs');

// fs.readFile('./Tests/Week2/QuickSort.txt', function(err, data) {
fs.readFile('./Tests/Week2/QuickSort.txt', function(err, data) {
    if(err) {console.log("ERROR:", err);}
    var bigStringArray = data.toString().split("\n");
    var bigNumArray = bigStringArray.map(Number);
    bigNumArray.pop();
    console.log("Data ready", bigNumArray[9999]);

//
// Partition
let partition = (arr, startIndex, endIndex) => {
  let l = startIndex || 0;
  let r = endIndex || (arr.length-1);
  let numElements = r-l+1
  let first, middle, last, middleIndex;

  // //if want pivot as LAST ELEMENT OF ARRAY
  //   swap(l, r, arr);
  // //

  //if want median element of First Middle and Last to be Pivot
    if(numElements>2){
      if ((r - l)%2){
        middleIndex = Math.floor(((r + l)/2))
        // console.log("even", l, middleIndex, r, arr)
      }else{
        middleIndex = (r+l)/2
        // console.log("odd", l, middleIndex, r, arr)
      }
      first = arr[l];
      middle = arr[middleIndex];
      last = arr[r];
      if((middle - first)*(last-middle)>0){
        swap(l, middleIndex, arr)
      }else if((last-first)*(middle-last)>0){
        swap(l, r, arr)
      }
    }
  // End search for Median



  let pivot = arr[l];
  let i = l+1
  // console.log("starting count", count)
  // console.log("Partition Called.  Beginning array: ", arr[999])
  // console.log('# Elem in sub-array:', numElements, ", pivot",pivot, ", l & r array indexes:", l, r);
  count = count + numElements-1;

  for (var j=l+1; j<=r; j++){
    // console.log("pivot, i, j, arr", pivot, i, j, arr);
    if(arr[j]<pivot){
      arr = swap (i, j, arr);
      // console.log("Swapped!", i, j, arr)
      i++;
    } else{
      // console.log("No Change", i, j, arr)
    }
  }
  //put pivot in correct location
  if(l!==(i-1)){
    // console.log("Pivot element, swap needed");
    swap (l, i-1, arr)
  }else{
    // console.log("Pivot element, already in correct place, no swap");

  }

  // console.log("ending count", count)
  // console.log("----------");
  // console.log("move pivot, i, j, arr", pivot, i, j, arr);
  // console.log('partition called; end', numElements, count, pivot,l, r, arr);
  return i-1;
}

let swap = (leftIndex, rightIndex, array) =>{
  // console.log("swap called!  Switch places for these two array elements", array[leftIndex], array[rightIndex])
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
  // console.log("new order", array);
  return array;

}


var quickSort = function(array, p, r) {
  // console.log("quicksort called", p, r, array);
  if(r-p>0){
    var q = partition(array, p, r);
    quickSort(array, p, q - 1);
    quickSort(array, q+1, r);
  }else{
    return array;
  }
}

// var array = [3,8,2,5,1,4,7,6];
// var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
// var array = [3,9,8,4,6,10,2,5,7,1];
var array = bigNumArray;

var count = 0;
quickSort(array, 0, (array.length - 1));
console.log("Count =",count);

//




  });
