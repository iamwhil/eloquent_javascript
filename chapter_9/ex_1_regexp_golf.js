// for each of the foloowing items write a regular expression to test if any of the 
// substrings occur in a string.  Match only strings containing one of the
// substrings described. Make each expression as small as possible.

// 1. car and cat
// 2. pop and prop
// 3. ferret, ferry, and farrari
// 4. any word ending in ious
// 5. a whitespace character followed by a period, comma, colon or semicolon
// 6. a word longer than 6 letters
// a word without the letter e or E

const carRegEx = /ca[rt]/

console.log(carRegEx.test('car') == true)
console.log(carRegEx.test('cat') == true)
console.log(carRegEx.test('carter') == true)
console.log(carRegEx.test('carma') == true)
console.log(carRegEx.test('cation') == true)
console.log(carRegEx.test('caution') == false)
console.log(carRegEx.test('cavernous') == false)

const popRegEx = /pr{0,1}op/

console.log(popRegEx.test('pop') == true)
console.log(popRegEx.test('prop') == true)
console.log(popRegEx.test('poop') == false)
console.log(popRegEx.test('prrop') == false)
console.log(popRegEx.test('prrrop') == false)
console.log(popRegEx.test('poppa') == true)
console.log(popRegEx.test('props') == true)

const ferretRegEx = /ferr(et|y|ari)/

console.log(ferretRegEx.test('ferret') == true)
console.log(ferretRegEx.test('ferry') == true)
console.log(ferretRegEx.test('ferrari') == true)
console.log(ferretRegEx.test('ferre') == false)
console.log(ferretRegEx.test('ferra') == false)
console.log(ferretRegEx.test('ferrar') == false)
console.log(ferretRegEx.test('ferr') == false)

const iousRegEx = /ious\b/

console.log(iousRegEx.test('ious') == true)
console.log(iousRegEx.test('pious') == true)
console.log(iousRegEx.test('cheesyious') == true)
console.log(iousRegEx.test('iousb') == false)
console.log(iousRegEx.test('larryiousy') == false)

const whitespaceRegEx = /\s[.,;:]/

console.log(whitespaceRegEx.test(' .') == true)
console.log(whitespaceRegEx.test(' ,') == true)
console.log(whitespaceRegEx.test(' ;') == true)
console.log(whitespaceRegEx.test(' :') == true)
console.log(whitespaceRegEx.test('.') == false)

const longerWordRegEx =/\w{6,}/

console.log(longerWordRegEx.test('deliciousness') == true)
console.log(longerWordRegEx.test('dinner') == true)
console.log(longerWordRegEx.test('dog') == false)

const missingERegEx = /\b[^\We]+\b/i

console.log(missingERegEx.test('burrito') == true)
console.log(missingERegEx.test('chafer') == false)
console.log(missingERegEx.test('Elastic') == false)