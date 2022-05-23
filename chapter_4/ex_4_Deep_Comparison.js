// Write a deepEquals method which compares the values of objects recursively 

function deepEquals(a, b) { 
  if(a == undefined || b == undefined || a.length != b.length) { return false };

  for(let x in a) { 
    // if a[x] is an object but not null dig deeper
    if(typeof(a[x]) == 'object' && (a[x] != null || b[x] != null)) {
      return deepEquals(a[x], b[x]);
    } else {
      if(a[x] != b[x]) { return false };
    }
  }
  return true
}

test1 = [[1, 2, [3, 4]], [1, 2, [3, 4]], true]
test2 = [[1, 2, [3, 4]], [1, 2, [3, 5]], false]
test3 = [{ oh: 'hi', there: 'friend', hows: { it: 'going' } }, { oh: 'hi', there: 'friend', hows: { it: 'going' } }, true]
test4 = [{ oh: 'hi', there: 'friend', hows: { it: 'going' } }, { oh: 'hi', there: 'friend', hows: { it: 'brah' } }, false]
test5 = [{ oh: 'hi', there: 'friend', hows: { it: 'going' } }, { oh: 'hi', there: 'friend', howIs: { it: 'going' } }, false]
test6 = [[1, 2, null], [1, 2, [3, 4]], false]
test6 = [[1, 2, null], [1, 2, null], true]

console.log(deepEquals(test1[0], test1[1]) == test1[2])
console.log(deepEquals(test2[0], test2[1]) == test2[2])
console.log(deepEquals(test3[0], test3[1]) == test3[2])
console.log(deepEquals(test4[0], test4[1]) == test4[2])
console.log(deepEquals(test5[0], test5[1]) == test5[2])
console.log(deepEquals(test6[0], test6[1]) == test6[2])
