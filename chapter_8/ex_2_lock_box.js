// given:

const box = { 
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
}

// write a function called withBoxUnlocked that takes a function value as 
// argument, unlocks the box, runs the function, and then ensures that the
// box is locked again before returning, regardless of whether the agrument
// function returned normally or thew an exception

function withBoxUnlocked(body) {
  box.unlock();
  try {
    body();
  } finally {
    box.lock()
  }
}

withBoxUnlocked(function() { 
  box.content.push("gold piece");
  console.log("peeking: ", box.content)
});

try { 
  withBoxUnlocked(function() {
    throw new Error ("Pirates on the horizon! Abort!");
  })
} catch (e) {
  console.log("Error Raised: ", e);
}

console.log(box.locked);