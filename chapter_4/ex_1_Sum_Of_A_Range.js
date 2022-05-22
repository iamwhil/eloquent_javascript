// Sum over a given range. Write both the sum and range functions.
// so that console.log(sum(range(1, 10)) will produce 55
// Allow for positive and negative step sizes.

function sum(array) {
  return array.reduce((summ, element) => {
    return summ + element
  });
}

function range(a, b, step = 1) { 
  let array = [];
  operator = step > 0 ? lessThan : greaterThan;
  for(i = a; operator(i, b); i += step) {
    array.push(i) 
  }
  return array
}

function lessThan(a, b) {
  return a <= b
}

function greaterThan(a, b) {
  return a >= b
}

console.log(sum(range(1, 10)) == 55)
console.log(sum(range(1, 10, 2)) == 25)
console.log(sum(range(10, 1, -1)) == 55)
console.log(sum(range(10, 1, -1)) == 55)
console.log(sum(range(5, 2, -1)) == 14)