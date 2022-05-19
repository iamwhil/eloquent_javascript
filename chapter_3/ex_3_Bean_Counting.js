// Count the number of occurences of a character in a string.

const countCharacter = (string, char) => {
  count = 0
  for(let c of string){
    if(c == char) { count ++ }
  }
  console.log(`'${char}' occurs ${count} times in '${string}'`)
}

countCharacter('oh hello there', 't')
countCharacter('oh hello there', 'o')
countCharacter('oh hello there', 'v')