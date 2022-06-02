// replace all single qutoes with double quotes.
// except for in contractions.

string = "'okay that'll do pig'"

quoteReplaceRegEx = /(^|\W)'|'(\W|$)/g

console.log(string.replace(quoteReplaceRegEx, "\""))