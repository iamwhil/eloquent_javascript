function reverseArray(array) {
  reversed_array = [];
  while (array.length > 0) {
    reversed_array.push(array.pop());
  }
  return reversed_array;
}

function reverseArrayInPlace(array2){
  num_runs = array2.length;
  for (i = 0; i < num_runs; i++){
    array2.unshift(array2.pop());
  }
  return array2;
}

// Test Case
let array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));

let array2 = [6,7,8,9,10];
console.log(reverseArrayInPlace(array2));
