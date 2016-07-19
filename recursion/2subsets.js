"use strict";

let startArray = [1,2,3];
let storageArr =[]
let currSubSet = [];
let newElement = [];
let result = [];

let findSubsets = (arr) => {
  console.log('pre', arr)
  if(arr.length ===1) {
    arr.pop();
    arr.unshift([1]);
    arr.unshift([])
    return arr;
  }

  let oneElement = arr.pop();
  findSubsets(arr);
    console.log("pre array", arr)
    console.log("add this element", oneElement);
    let length = arr.length
    for(var i=1; i<length; i++){
      if(i===1) arr.push([oneElement]);
        for (var j=0; j<arr[i].length; j++){
          arr.push([arr[i][j], oneElement]);
        }
    }
    console.log("post", arr);
    return arr;


}

findSubsets(startArray);
