var curNumberModule = require('./index.js');

var curEnglishValue = new curNumberModule.number_to_string();//defulat is english 
var englishMillionString = curEnglishValue.get_string_in_millions_and_billions(90909234567,56753,false,false);

console.log("English in billions");
console.log(englishMillionString);


console.log("\n\n\nEnglish in crores")
var englishCrooreString = curEnglishValue.get_string_in_lakhs_and_crore(124909092.567);
console.log(englishCrooreString);



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
var firstFrenchString = curFrenchValue.get_string_in_millions_and_billions(4567623423.70346666666,false,false);//trois mille  quatre cent cinquante six
console.log(firstFrenchString);

var secondString = curFrenchValue.get_string(345678,true,true,curNumberModule.crore_or_millions.crore);


// second value
var secondString = curFrenchValue.get_string(9130456456);// neuf cent treize crore  quatre lakh  cinquante six mille  quatre cent cinquante six
console.log(secondString);




