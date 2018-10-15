function arrayToList(array){
  if (array.length == 1){
    return {value: array[0], rest: null};
  } else {
    return {value: array[0], rest: arrayToList(array.slice(1))};
  }
}

function listToArray(list){
  if (list.rest == null){
    return [list.value];
  } else {
    return [list.value].concat(listToArray(list.rest));
  }
}

function prepend(element, list){
  return {value: element, rest: list};
}

function nth(list, n){
  if (n == 0 ){
    return (list.value);
  } else if (list.rest == null){
    return undefined;
  } else {
    return nth(list.rest, n - 1);
  }
}

// Test Case
array = [1, 2, 3];
list = arrayToList(array);
console.log("The list is ", list);
array2 = listToArray(list);
console.log("The array is", array2);
list2 = prepend(0, list);
console.log("Prepending 2 to list...", list2);
console.log("Returning position 2", nth(list2, 2));
console.log("Should be undefined (6)", nth(list2, 6));
