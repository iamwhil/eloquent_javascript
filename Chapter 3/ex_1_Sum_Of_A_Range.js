
const range = function(start, end, step){
  step = (step || 1);
  array = [];
  if (start > end && step < 0) {
    for (i = start; i >= end; i += step){
      array.push(i);
  	}
  } else {
    for (i = start; i <= end; i += step){
      array.push(i);
    }
  }
  console.log("The array!", array);
  return array;
}

const sum_of_range = function(array) {
  sum = 0;
  for (let i of array) {
    sum += Number(i);
  }
  return sum;
}

// Test Case
console.log("The sum of the range!", sum_of_range(range(5, 2, -1)));
