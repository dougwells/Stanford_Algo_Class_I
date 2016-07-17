"use strict";


//Goal - want to create a tree like shown at bottom
  //First select top-level as parent in makeTree fn
  //second: call makeTree fn using top level parent's id as parent for next level down object

  //ie:  null is top level parent.  It's ID is used as parent for mammals
  //recursively call makeTree with new parent & so on


let categories = [
  {id: 'animals', parent: null},
  {id: 'mammals', parent: 'animals'},
  {id: 'cats', parent: 'mammals'},
  {id: 'dogs', parent: 'mammals'},
  {id: 'chihuahua', parent: 'dogs'},
  {id: 'labrador', parent: 'dogs'},
  {id: 'persian', parent: 'cats'},
  {id: 'siamese', parent: 'cats'}
];

const makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter(item => item.parent === parent)
    .forEach(filteredItem => node[filteredItem.id] = makeTree(categories, filteredItem.id))
  return node;
}

console.dir(makeTree(categories, null));

//stringify this

console.log(
  JSON.stringify(
    makeTree(categories, null), null, 2
  )
);



//desired output
// animals: {
//   mammals: {
//     dogs: {
//       chihuahua: null,
//       labrador: null,
//     },
//     cats: {
//       persian: null,
//       siamese: null
//     }
//   }
// }
