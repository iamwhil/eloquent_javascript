// write a higher order function that provides something like a for loop statement.
// It takes a value, a test function, an update function, and a body function.
// Each iteration it runs the test function on the current loop value and stops if false.
// Then calls the body function giving it the current value.
// Finally it calls the update function to create a new value and starts from the beginning.
// When defining the fucntion you can use a regular loop to do the actual looping.

function test(value) { 
  return value < 10;
}

function body(value) { 
  console.log("Value is: ", value);
}

function update(value) {
  return value += 1
}

function somethingLikeAForLoop(initialValue, test, body, update) {
  let value = initialValue
  while(test(value)) {
    body(value);
    value = update(value)
  }
  return value
}

console.log(somethingLikeAForLoop(1, test, body, update))