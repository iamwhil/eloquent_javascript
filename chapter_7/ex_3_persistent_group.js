// create a group object that does not mutate state.
// when add and delete are called it creates a new Group.

class Group {
  constructor() {
    this.members = {};
  }

  add(value) {
    let dup = new Group
    dup.members = Object.assign({}, this.members)
    dup.members[value] = true;
    return dup
  }

  delete(value) {
    let dup = new Group();
    dup.members = Object.assign({}, this.members);
    delete(dup.members[value]);
    return dup;
  }
}

let group = new Group;
let group1 = group.add(1)
let group2 = group1.add(2)
console.log(group)
console.log(group1)
console.log(group2)

console.log("deleting...");
let group3 = group2.delete(2);
console.log(group3)