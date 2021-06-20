const {NumberToWord, kananda, english}= require("multilingual-number-to-words")
// import {NumberToWord} from "multilingual-number-to-words"


let n = new NumberToWord(english);

console.log(n.getWord(1004));
console.log(n.convertToComaSeparetedString(1234567890001, "MillionAndBillion"));
console.log(n.convertToComaSeparetedString(1234567890001 ));

