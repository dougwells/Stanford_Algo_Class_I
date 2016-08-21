"use strict"

console.log(wordCheck("themanran", ['the', 'ran', 'man']));
console.log(wordCheck("whomtobelltolls", ['to', 'whom', 'the', 'bell','tolls']));


function wordCheck (phrase, phraseArr, privIndex = 0, answerArr = []){
  //Base Case
  if(privIndex === phraseArr.length){
    return answerArr
  }

  //Non-Base
  let answer = phrase.indexOf(phraseArr[privIndex])
  if(answer === -1){
    answerArr.unshift("Answer = No");
    return answerArr;
  }else{
    answerArr.push(phraseArr[privIndex])
    privIndex ++;
    return wordCheck(phrase, phraseArr, privIndex, answerArr);
  }
}
