const {NumberToWord, kananda, english, telagu, marathi,}= require("multilingual-number-to-words")



let n = new NumberToWord(english);

console.log(n.getWord( 123456789111.04,"MillionAndBillion", "Currency"));
console.log(n.convertToComaSeparetedString(123456789111, "MillionAndBillion"));
console.log(n.convertToComaSeparetedString(123456789111 ));

