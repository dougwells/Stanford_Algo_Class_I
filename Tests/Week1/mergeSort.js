"use strict"

//use this file for merge-sort & counting inversions
//simply run "sort" fn on array to get a count of the number of inversions
//"sort" returns the sorted array which you can assign to var or print to console
  //var sortedArr = sort(unsortedArr);
  //console.log(sort(arr)); --> console logs count of inversions & returns sorted array

var fs = require('fs');

fs.readFile('./Tests/Week1/IntegerArray.txt', function(err, data) {
    if(err) {console.log("ERROR:", err);}
    var bigStringArray = data.toString().split("\n");
    var bigNumArray = bigStringArray.map(Number);
    bigNumArray.pop();

    var count =0;
    var littleArr = [6,5,4,3,2,1];
    console.log(sort(bigNumArray)[49999]);
    console.log("Number of inversions", count);

    function sort(array) {

      var length = array.length,
          mid    = Math.floor(length * 0.5),
          left   = array.slice(0, mid),
          right  = array.slice(mid, length);

      if(length === 1) {
        return array;
      }
      // console.log("Left / Right: ", left, right);
      return merge(sort(left), sort(right));

    }

    function merge(left, right) {
      // console.log("Arrays to merge", left, right)
      var result = [];

      while(left.length || right.length) {
        if(left.length && right.length) {
          if(left[0] < right[0]) {
            result.push(left.shift());
          } else {
            count = count + left.length;
            result.push(right.shift());
          }

        } else if (left.length) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }

      }
      return result;
    }

  });
