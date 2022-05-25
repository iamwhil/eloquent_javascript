// Implement an every function that takes an array and a predicate function as paramters.
// Write two versinos, one using a loop and one using the some method.

function lessThan5(element) {
  return element < 5
}

function every1(array, func) { 
  for(let x of array) { 
    if(func(x) == false) { return false }
  }
  return true
}

// In order to use some we need to check that every thing is true,
// so if some are false every is false.
function every2(array, func) { 
  return !array.some((element) => !lessThan5(element))
}

tests = [
  [[1, 2, 3], lessThan5, true],
  [[1, 3, 6], lessThan5, false],
  [[1, 2, 5], lessThan5, false]
]

console.log(every1(tests[0][0], tests[0][1]) == tests[0][2])
console.log(every1(tests[1][0], tests[1][1]) == tests[1][2])
console.log(every1(tests[2][0], tests[2][1]) == tests[2][2])

console.log(every2(tests[0][0], tests[0][1]) == tests[0][2])
console.log(every2(tests[1][0], tests[1][1]) == tests[1][2])
console.log(every2(tests[2][0], tests[2][1]) == tests[2][2])