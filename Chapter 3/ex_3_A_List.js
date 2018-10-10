function arrayToList(array){
  if (array.length == 1){
    return {value: array[0], rest: null};
  } else {
    return {value: array[0], rest: arrayToList(array.slice(1))};
  }
}

// Test Case
array = [1, 2, 3];
console.log(arrayToList(array));
