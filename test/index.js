const {NumberToWord}= require("multilingual-number-to-words")
// import {NumberToWord} from "multilingual-number-to-words"


let n = new NumberToWord();

console.log(n.getWord(3));
console.log(n.convertToComaSeparetedString(1234567890001, "MillionAndBillion"));
console.log(n.convertToComaSeparetedString(1234567890001 ));

