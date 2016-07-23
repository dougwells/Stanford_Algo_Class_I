var quickSort = function (arr) {
	if (arr.length <= 1) {return arr}
	var center = arr[0], left = [], right =[];
	for (i = 1; i < arr.length; i++) {
		if (arr[i] < center) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat(center, quickSort(right))
}

console.log(quickSort([3,8,2,5,1,4,7,6]))
