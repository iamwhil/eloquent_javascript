// Fizz Buzz - print fizz if divisible by 3 and buzz if 5
// for all numbers 0 to 100 

function fizzBuzz(n) {
  // setting the array only makes sense if you want to just print the array 1x
  // to save on time spent calling console.log
  fizzyArray = [] 
  for(let i = 0; i <= 100; i++) {
    string = `${i}: `;
    if(i % 3 == 0) {
      string += 'Fizz'
    };
    if(i % 5 == 0) {
      string += 'Buzz'
    };
    fizzyArray.push(string)
  }

  // for(let i of fizzyArray) {
  //   console.log(i)
  // }
  console.log(fizzyArray)
}

fizzBuzz(100)