// Write a class vec that represents a vector in 2 dimensional space, given x and y parameters.
// Write a plus and minus method.
// write a length getter that is the distance from the origin.

class Vec {
  constructor(x, y) { 
    this.x = x;
    this.y = y;
  }

  length() { 
    return Math.sqrt(this.x**2 + this.y**2)
  }

  plus(vector) {
    return new Vec(this.x + vector.x, this.y + vector.y)
  }

  minus(vector) { 
    return new Vec(this.x - vector.x, this.y - vector.y)
  }
}

vector1 = new Vec(3, 4);
vector2 = new Vec(3, 4);
console.log(vector1.length()); // 5

const vectorSum = vector1.plus(vector2)
console.log(vectorSum.length()) // 10

const vectorDiff = vector1.minus(vector2)
console.log(vectorDiff.length())

