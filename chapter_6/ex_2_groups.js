// write a class Group that like a set has add, delete, and has methods.
// its constructor creates an empty group, add adds a value if it is not alreay a member,
// delete removes a member, and has returns a boolean indicating if the member is already
// a member of the group.
// create a static method to create a new group from an iterable object passed in.

// Thoughts I kind of want to just do this as a class. However, having the keys be property names
// leaves me open to someone adding 'has' to the group which is already a property of the group.
// I could have it be a map with the key => true, or an array of keys, however the search time is O(N).
// We could have it have an empty class in it that has each of the properties.

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
    group = new Group()
    if(typeof(iterable) == 'object') {
      for(let x in iterable) {
        group.members[x] = true
      }
    } else {
      for(let x of iterable) { 
        group.members[x] = true
      }
    }
    return group
  }

  has(key) {
    return this.members.hasOwnProperty(key);
  }
}

group = new Group();
group.add('elephant')
group.add('dog')
group.add('dog')
group.add('dog')
group.add('cat')
group.add('has')
group.add('key')

console.log(group)

console.log(group.has('dog'))
console.log(group.has('monkey'))
group.delete('dog')

console.log(group)

console.log(group.has('dog'))

let array = ['a', 'b', 'c']

group_from_array = Group.from(array)
console.log(group_from_array)

object = {'a': 'true', 'b': 'sure', 'joe': 'cool'}
group_from_object = Group.from(object)
console.log(group_from_object)