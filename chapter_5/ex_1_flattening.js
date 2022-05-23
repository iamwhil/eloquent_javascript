// use reduce and concat to flatten an array
// using node's assert module to get at deepEqual
const assert = require('assert')

function flatten(array) { 
  return array.reduce(reduceArray, [])
}

function reduceArray(summ, element) {
  if(typeof(element) == 'object') { 
    return summ.concat(flatten(element))
  } else {
    return summ.concat(element)
  }
}

array = [1, 2, [3, 4], [5, [6, 7]]]
reducedArray = [1, 2, 3, 4, 5, 6, 7]

console.log(flatten(array))
assert.deepEqual(flatten(array), reducedArray)
