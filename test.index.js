var curNumberModule = require('./index.js');

var curEnglishValue = new curNumberModule.number_to_string();//defulat is english 
var curNumber = 900245234567.56753;
var englishMillionString = curEnglishValue.get_string_in_millions_and_billions(curNumber,false,false);

console.log("English in billions");
console.log(curNumber);
console.log(englishMillionString);


console.log("\n\n\nEnglish in crores")
curNumber = 10234687.29;
var englishCrooreString = curEnglishValue.get_string_in_lakhs_and_crore(curNumber);
console.log(curNumber);
console.log(englishCrooreString);
var englishCroreString = curEnglishValue.get_string_in_lakhs_and_crore(345621.456, true, true);





console.log("\n\n\nFrench")
let french = {               
    "single_digits" : ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"],
    "teens"         : ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"],
    "double_digits" :  ["zéro", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix" ],
    "crore_lakhs"   : ["crore", "lakh", "mille", "cent"],
    "million_billions" : ["quadrillion", "billion", "billion", "million", "mille"],
    "and_currency"  : ["et", "roupies", "paise", "point"]
}

var curFrenchValue = new curNumberModule.number_to_string(french);

// first value
console.log('First value in french')
curNumber = 4567623423.70346666666;
var firstFrenchString = curFrenchValue.get_string_in_millions_and_billions(curNumber,true,true);//trois mille  quatre cent cinquante six
console.log(curNumber);
console.log(firstFrenchString);

console.log('\n\n\n\nSecond value in french')
curNumber =345678;
var secondString = curFrenchValue.get_string_in_lakhs_and_crore(curNumber,true,true);
console.log(curNumber);
console.log(secondString);





