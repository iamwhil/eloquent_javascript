// print an n x n checker board with # black and ' ' white.

function printBoard(n) {
  for(let i = 0; i < n; i++) {
    string = '';
    for(let j = 0; j < n; j++) {
      string += ((i + j) % 2 == 0) ? ' ' : '#';
    }
    console.log(string)
  }
};

printBoard(8)