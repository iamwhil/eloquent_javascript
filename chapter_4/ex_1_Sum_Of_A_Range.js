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
  operator = step > 0 ? '<=' : '>=';
  // eval is generally frowned upon. eval(':(')
  for(i = a; eval(i + operator + b); i += step) {
    array.push(i) 
  }
  return array
}

console.log(sum(range(1, 10)) == 55)
console.log(sum(range(1, 10, 2)) == 25)
console.log(sum(range(10, 1, -1)) == 55)
console.log(sum(range(10, 1, -1)) == 55)
console.log(sum(range(5, 2, -1)) == 14)