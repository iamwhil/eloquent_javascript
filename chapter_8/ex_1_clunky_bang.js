// Wrap a function that throws an error 80% of the time 
// that retries until success.

// Thoughts: I will want to catch a custom error and just retry.

class ClunkyError extends Error {};

function clunkyFunction() {
  let chances = Math.floor(Math.random() * 10)
  console.log("chance:", chances)
  if(chances >= 8) { return true }

  throw new ClunkyError("Ugh I can't even " + chances);
}

function keepTrying() { 
  try {
    if(clunkyFunction()) { console.log("little engine that!")}
  } catch (e) {
    if(e instanceof ClunkyError) { 
      keepTrying()
    } else {
      throw e
    }
  }
}

keepTrying()
keepTrying()
keepTrying()