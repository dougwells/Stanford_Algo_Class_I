"use strict"

var addChildren = function(object, left, right){
  object.left = {id: left};
  object.right = {id: right};
}

var root = {id: 1};

addChildren(root, 2,3);
addChildren(root.left, 4,5);
addChildren(root.right, 6,7);

console.dir(root);
