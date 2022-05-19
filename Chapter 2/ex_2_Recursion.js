// Write a recursive function to find if n-2 is even or odd

function evenOrOdd(n) { 
  if(n == 0) {
    return 'even'
  } else if(n == 1) {
      return 'odd'
  } else {
    return n > 0 ? evenOrOdd(n - 2) : evenOrOdd(n + 2)
  }
}

console.log(evenOrOdd(0) == 'even')
console.log(evenOrOdd(1) == 'odd')
console.log(evenOrOdd(2) == 'even')
console.log(evenOrOdd(10) == 'even')
console.log(evenOrOdd(11) == 'odd')
console.log(evenOrOdd(75) == 'odd')
console.log(evenOrOdd(100) == 'even')
console.log(evenOrOdd(-1) == 'odd')
console.log(evenOrOdd(-2) == 'even')
console.log(evenOrOdd(-20) == 'even')