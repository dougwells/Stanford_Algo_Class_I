var shortArr = [1,2,3,4,5];
var longArr = [1,2,3,4,5,6,7,8,9,0]

var test = (arr) => {
  shortArr.pop();
  return longArr;
}

console.log(test(shortArr));
