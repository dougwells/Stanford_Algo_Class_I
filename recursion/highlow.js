"use strict"
var smallArray = [3,1,8,2,5,4,6];
var newArr = [];
var pivot = 1;


var order = (arr, pivot) => {
  //Set up arrays
    if (newArr.length ===0){
      pivot = arr.shift();
      newArr.push(pivot);
      console.log("Fn ready, pivot", pivot, "arr", arr, "new", newArr);
    }

    if(arr.length<1){
      console.log("final:", pivot, arr, newArr)
      return newArr;

    }else{
      console.log("non-base pre:", pivot, arr, newArr);
      var compare = arr.shift()
      if(pivot>compare){
        console.log("Pivot greater", pivot, compare);
        newArr.unshift(compare)
      }else{
        console.log("Pivot less", pivot, compare);
        newArr.push(compare)
      }
      console.log("non-base post:", pivot, arr, newArr)
      order(arr, pivot);
    }
}

console.log(order(smallArray, 1))
