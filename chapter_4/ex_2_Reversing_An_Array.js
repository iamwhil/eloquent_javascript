function reverseArray(array) {
  reversed_array = [];
  while (array.length > 0) {
    reversed_array.push(array.pop());
  }
  return reversed_array;
}

// This did not work.
// After looking at an answer it seems that I was trying to change the
// variable outside of the scope of the function.  It just wanted me to
// change it in the function.  This is here to show the first idea.
function reverseArrayInPlace(){
  num_runs = array2.length;
  for (i = 0; i < num_runs; i++){
    array2.unshift(array2.pop());
  }
  console.log(array2);
  return array2;
}

// Test Case
let array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));

var array2 = [6,7,8,9,10];
console.log(reverseArrayInPlace());
