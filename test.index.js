var curNumberModule = require('./index.js');

let french = {               
    "single_digits" : ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"],
    "teens"         : ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"],
    "double_digits" :  ["zéro", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix" ],
    "crore_lakhs"   : ["crore", "lakh", "mille", "cent"]
}

var curValue = new curNumberModule.number_to_string(french);

// first value
var firstString = curValue.get_string(3456);//trois mille  quatre cent cinquante six
console.log(firstString);

// second value
var secondString = curValue.get_string(9130456456);// neuf cent treize crore  quatre lakh  cinquante six mille  quatre cent cinquante six
console.log(secondString);



