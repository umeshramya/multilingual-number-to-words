# multilingual-number-to-words

Converts to number in to words. one can get words written in any language. users can add there own language if not included
This module is written in typescript

## Contributors
-Dr Umesh R Bilagi <umeshbilagi@gmail.com>

## How to use
use this command to include node module

### npm i multilingual-number-to-words

---
#### @Below the code for using in Javascript file

```
var curNumberModule = require("multilingual-number-to-words");

var curValue = new curNumberModule.number_to_string("hindi");
//few languages are added few more will be added

// first value
var firstString = curValue.get_string(3456);//three thousand  four hundred fifty six
console.log(firstString);

    
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


```

---
### Below the code for using in Typescript file

```
    import * as stringNumber from "./index";
    //to add new language for example french
    let french = {               
        "single_digits" : ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"],
        "teens"         : ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"],
        "double_digits" :  ["zéro", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix" ],
        "crore_lakhs"   : ["crore", "lakh", "mille", "cent"]
    }


    let curValue = new stringNumber.number_to_string(french);

    // first value
    let firstString = curValue.get_string(3456);//three thousand  four hundred fifty six
    console.log(firstString);

    // second value
    let secondString = curValue.get_string(9130456456);// nine hundred thirteen crore  four lakh  fifty six thousand  four hundred fifty six
    console.log(secondString);

```

## How add languages to this

Make fork and add language  send pull request
use google to covert words add them in the pattern below in (language.ts)[language.ts]

"english" : {
                "single_digits" : ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
                "teens"         : ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen","nineteen" ],
                "double_digits" :  ["zero","ten", "twenty", "thirty", "forty", "fifty","sixty", "seventy", "eighty", "ninety" ],
                "crore_lakhs"   : ["crore", "lakh", "thousand", "hundred"],
                "million_billions" : ["quadrillion", "trillion", "billion", "million","thousand"],
                "and_currency"  : ["and", "rupees", "paise", "point"]



