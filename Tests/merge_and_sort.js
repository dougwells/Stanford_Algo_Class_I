"use strict"

//Second Iteration.  Merge sort works but challenge counting inversions


let split = (array) => {
  if (array.length ===1){return array;}
  var length = array.length,
      mid    = Math.floor(length/2),
      left   = array.slice(0, mid),
      right  = array.slice(mid, length);
      console.log("Current split array ...", left, right);
      right  = split(right);
      left   = split(left);
      return merge(left,right);
}

let merge = (arr1, arr2) =>{
  console.log("Arrays to merge", arr1, arr2)
  var mergedArray=[];
  var i=0;
  var j=0;

  while(i<arr1.length && j<arr2.length){
    console.log("pre-merge: ", mergedArray);
    if(arr1[i]>arr2[j]){
      mergedArray.push(arr2[j]);
      j++;
    }else{
      mergedArray.push(arr1[i]);
      i++;
    }
    console.log("post merge fn ", mergedArray);

  }

  var finalArr = mergedArray.concat(arr1.slice(i, arr1.length))
					.concat(arr2.slice(j, arr2.length));
  console.log("final array = ", finalArr);
	return finalArr;
}

split([6,5,4,3,2,1]);
// split([1,3,5,7,9,2,4,6,8,10]);
