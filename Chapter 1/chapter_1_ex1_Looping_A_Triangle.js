// Create a triangle N high and wide of #'s

function drawTriangle(n) {
  for(let i = 1; i <= n; i++) {
    
    string = ''
    for(let j = 0; j < i; j++) {
      string += '#'
    }
    console.log(string);
  }
}

drawTriangle(7)