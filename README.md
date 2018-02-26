# multilingual-number-to-words
![verson](https://img.shields.io/badge/version-5.0.0-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg)

This converts to number in to words. one can get words written in any language. users can add there own language if not included. It also gives numbers in coma separated fashion. one can get results for both lakhs-crore and also in million-billion format


As of now Version 3.0.0 following languages are included in this project
1. english (default)
2. kananda
3. hindi
4. telagu
5. marathi
##### To add languages to this module kindly read below

## How to use
use this command to include as a node module
###### npm i multilingual-number-to-words

## Features
1. Index file contains the code and language file contains JSON of languages
2. Decimal value truncated to two degits

###### Note maximum number for crore and lakh conversion is 999999998
###### Note maximum number for million and billion conversions is 999999999999998

```
var curValue = require("multilingual-number-to-words");

var Num = 9873767.78;
curValue.lakhWord(Num); //return words in lakh crore in english
curValue.millionWord(Num); //return words millio in english

// in hindi, kananada, telagu, marati
curValue.lakhWord(Num, "hindi"); //return words in lakh crore in hindi
curValue.millionWord(Num, "hindi"); //return words millio in hindi

curValue.lakhComa(Num) // return number by coma spartation lakh and crore format
curValue.millonComa(Num) // return number by coma spartation million and billion format

```


### Use your own language in as JSON
```
console.log("\n\n\nFrench")
let french = {
"single_digits" : ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"],
"teens" : ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"],
"double_digits" : ["zéro", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix" ],
"crore_lakhs" : ["cent", "mille", "lakh", "crore"],
"million_billions" : ["cent", "mille", "million", "billion", "billion", "quadrillion"],
"and_currency" : ["et", "roupies", "paise", "point"]
}

// add your new language to your project
curvalue.addLanguage("french", french);
```

## Below is the english version use for trasalating in to your language
Only trasalate array elements.
```
{   
        "single_digits": ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        "teens": ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        "double_digits": ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
        "crore_lakhs": ["hundred", "thousand", "lakh", "crore"],
        "million_billions": [ "hundred", "thousand","million","billion","trillion","quadrillion"],
        "and_currency": ["and","rupees", "paise", "point"]
    }
```


## To Do
1.  fix bug in million billion double digit 
2.  to use regular expression of coma seprated method change the present one
