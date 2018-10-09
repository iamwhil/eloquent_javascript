let size = 8;
let chess_board_string = '';
for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      chess_board_string += "#";
    } else {
      chess_board_string += ' ';
    }
  }
  chess_board_string += "\n";
}
console.log(chess_board_string);
