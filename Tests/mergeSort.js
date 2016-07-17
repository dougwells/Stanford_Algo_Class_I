var k= 0;
var m=0;
var n=0;

var mergeSort = function(A) {
	if (A.length === 1) {
    console.log("Returning A: ",A);
    return A;
  }

	var midpoint = A.length / 2;
	var leftHalf = A.slice(0, midpoint);
	var rightHalf = A.slice(midpoint, A.length);

  k++;
  console.log("k=", k);
  console.log("leftHalf", leftHalf)
  console.log("rightHalf", rightHalf)
	leftHalf = mergeSort(leftHalf);

  m++;
  console.log("m=", m);
  console.log("leftHalf", leftHalf)
  console.log("rightHalf", rightHalf)
	rightHalf = mergeSort(rightHalf);


	return merge(leftHalf, rightHalf);
};

var merge = function(arr1, arr2) {
  console.log("arr1=", arr1);
  console.log("arr2=", arr2);

	var mergedArr = [];
	var i = 0;
	var j = 0;

	while ( i < arr1.length && j < arr2.length ) {
		if ( arr1[i] > arr2[j] ) {
			mergedArr.push(arr2[j]);
			j++;
		} else {
			mergedArr.push(arr1[i]);
			i++;
		}
    n++;
    console.log("second fn merge running.  n= ",n);
    console.log("merged array = ",mergedArr);
	};

  var finalArr = mergedArr.concat(arr1.slice(i, arr1.length))
					.concat(arr2.slice(j, arr2.length));
  console.log("final array = ", finalArr);
	return finalArr;
};

mergeSort([1,3,5,7,9,2,4,6,8,10]);
