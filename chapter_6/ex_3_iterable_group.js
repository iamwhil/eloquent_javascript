// make the groups class iterable

class Group {
  constructor() {
    this.members = {}
  }

  add(key) {
    this.members[key] = true
  }

  delete(key) {
    delete this.members[key]
  }

  static from(iterable) { 
    let group = new Group()
    for(let x of iterable) { 
      group.members[x] = true
    }
    return group
  }

  has(key) {
    return this.members.hasOwnProperty(key);
  }

  [Symbol.iterator]() {
    return new GroupIterator(this)
  }
}

class GroupIterator {
  constructor(group) { 
    this.group = group;
    this.i = 0
  }

  next() {
    if(this.i >= Object.keys(this.group.members).length) { return {done: true} }
    const value = Object.keys(this.group.members)[this.i]
    this.i++
    return {value, done: false}
  }
}

// Group.prototype[Symbol.iterator] = function() {
//   return new GroupIterator(this)
// }

let group = Group.from(['a', 'b', 'c', 'd'])
for(let x of group) { 
  console.log(x)
}