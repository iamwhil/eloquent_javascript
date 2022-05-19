function countChars(string, char){
  char_count = 0;
  for (i = 0; i < string.length; i++){
    if (string[i] == char) { char_count++ };
  };
  console.log(`Number of ${char}'s: ${char_count}'`);
};

//Test case
test_string = "Why hello there you handsome cat.";
countChars(test_string, 'e');
