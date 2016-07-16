"use strict"

let countUp = (start, stop)=>{
  if(start<=stop) {
    console.log(start);
    return countUp(start+1, stop);
  } else {
    return console.log('end');
  }
}

countUp(0,10);
