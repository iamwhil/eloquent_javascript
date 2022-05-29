// write a class Group that like a set has add, delete, and has methods.
// its constructor creates an empty group, add adds a value if it is not alreay a member,
// delete removes a member, and has returns a boolean indicating if the member is already
// a member of the group.

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