function isEven(num){
  if (num == 1 || num == -1) { return false }
  else if (num == 0) { return true }
  else { return isEven(num - 2) }
}

//Test case
console.log(isEven(50));
console.log(isEven(75));
