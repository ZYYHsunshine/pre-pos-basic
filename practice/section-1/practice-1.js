'use strict';

function find(collection, element) {
  let result;
  for (let i = 0; i < collection.length; i++) {
    if  (collection[i] === element)
    return collection[i];
  }
  return '实现练习要求，并改写该行代码。';
}
