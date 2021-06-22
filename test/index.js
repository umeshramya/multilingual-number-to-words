const {NumberToWord, kananda, english}= require("multilingual-number-to-words")
// import {NumberToWord} from "multilingual-number-to-words"


let n = new NumberToWord(english);

console.log(n.getWord( 201,"LakhsAndCrore", "Currency"));
console.log(n.convertToComaSeparetedString(123456789111, "MillionAndBillion"));
console.log(n.convertToComaSeparetedString(123456789111 ));

