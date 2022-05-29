// can you think of a way to call 'hasOwnProperty' on an object that has its own 
// property 'hasOwnProperty'? 

class Fickle {
  constructor(){}

  hello(name) {
    return "very good " + name;
  }

  hasOwnProperty = 'sho'
}

let fickle = new Fickle();
console.log(fickle.hasOwnProperty)

console.log(Object.prototype.hasOwnProperty.call(fickle, 'hello'));
console.log('hello' in fickle)
console.log(Fickle.prototype.hello.call(fickle, 'george'))
console.log(Fickle.prototype.hasOwnProperty.call(fickle, 'hello'))
console.log(Object.prototype.hasOwnProperty.call(fickle, 'hasOwnProperty'))
console.log(typeof(fickle.hello) === 'function')
console.log(typeof(Fickle.prototype.hasOwnProperty) === 'function')

// fickle = { hello: 'hi', hasOwnProperty: "sure" }
// console.log(Object.prototype.hasOwnProperty.call(fickle, 'hello'))
// console.log(Object.prototype.hasOwnProperty.call(fickle, 'hasOwnProperty'))