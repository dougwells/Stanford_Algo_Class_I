
var mergeSort = function(A) {
	if (A.length === 1) {
    return A;
  }

	var midpoint = A.length / 2;
	var leftHalf = A.slice(0, midpoint);
	var rightHalf = A.slice(midpoint, A.length);
  console.log("split fn", leftHalf, rightHalf);

	rightHalf = mergeSort(rightHalf);


	return merge(leftHalf, rightHalf);
};

var merge = function(arr1, arr2) {
  console.log("Arrays to merge", arr1, arr2)
	var mergedArr = [];
	var i = 0;
	var j = 0;

	while ( i < arr1.length && j < arr2.length ) {
    console.log("pre-merge fn = ",mergedArr);
		if ( arr1[i] > arr2[j] ) {
			mergedArr.push(arr2[j]);
			j++;
		} else {
			mergedArr.push(arr1[i]);
			i++;
		}
    console.log("post-merge fn = ",mergedArr);
	};

  var finalArr = mergedArr.concat(arr1.slice(i, arr1.length))
					.concat(arr2.slice(j, arr2.length));
  console.log("final array = ", finalArr);
	return finalArr;
};

// mergeSort([1,3,5,7,9,2,4,6,8,10]);
mergeSort([6,5,4,3,2,1]);
