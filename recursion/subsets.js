"use strict";

let startArray = [1,2,3,4];

let currSubSet = [];
let result = [];
let i = 1;

let findSubsets = (arr) => {
  if(arr.length ===1) {
    currSubSet.push([]);
    currSubSet.push([arr[0]]);
    return currSubSet;
  }

  let oneElement = [arr.pop()];
  console.log('pre', arr)
  findSubsets(arr).map((element) =>{
    let storageArr = [];
    console.log("Starting Array", currSubSet)
    console.log("Current oneElement", oneElement);

    storageArr.push(element);
    console.log("Storage Array", storageArr);

    return currSubSet;
  });

  console.log('post', result)


  return result;
}

console.log("end", findSubsets(startArray));


// addedElemArr= result.map((element)=>{
//   return element.push([oneElement]);
// });
// console.log('post',addedElemArr);
// result = result.concat(addedElemArr)
// console.log("post result", result);


// prevSubSet.forEach((previous)=>{
//   // console.log(previous);
//   prevSubSet.push(previous.push([oneElement]));
// });

// result = result.concat(currSubSet);
//
// addedElemArr = currSubSet.map((elem)=>{
//   elem.push(oneElement);
// });
// console.log("pre-merge result", result);
// console.log("currSubSet w/new element", addedElemArr);
// result = result.concat(addedElemArr);
// console.log("post", result);
