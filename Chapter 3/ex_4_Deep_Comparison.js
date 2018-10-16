function testNull(a, b){
  if (a == null || b == null){
    if (a == b){
      return true;
    } else {
      return false;
    }
  }
}

function testValues(a, b){

}

function testObjects(a, b){
  if (Object.keys(a).length == Object.keys(b).length){
    let array = Object.keys(a);
    for(let k of array){
      if(a[k] != b[k]){
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function deepEquals(a, b){
  if (a == null || b == null){ return testNull(a, b); }
  if (typeof(a) == 'object' || typeof(b) == 'object'){ return testObjects(a, b);}
  else { return a == b }
}
// Test Cases

let a = 1;
let b = 2;
console.log(deepEquals(a, b));
let c = {key1: 'hello', key2: 'bye'};
let d = {key1: 'hello', key2: 'bye2'};
console.log(deepEquals(c, d));
