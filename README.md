# multilingual-number-to-words
![verson](https://img.shields.io/badge/version-6.0.2-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg)

This converts to numbers to words. one can get words written in any language. Users can add there own language if not included. It also gives numbers in comma separated fashion. one can get results for both lakhs-crore and also in million-billion format

Decimal can be diplayed in currency style or scientfic-mathmetical style

Followig are the language included in this project
1. english (default)
2. kananda
3. hindi
4. telagu
5. marathi


## How to use
use this command to include as a node module
###### npm i multilingual-number-to-words

## Features
1. Converts to number provided into words both in Lakhs-core or million-billion format
2. Decimal value truncated to two degits for currency style
3. One also get number provided in comma separeted format

###### Note maximum number for crore and lakh conversion is 999999998
###### Note maximum number for million and billion conversions is 999999999999998

```javascript
const {NumberToWord, kananda, english, telagu, marathi}= require("multilingual-number-to-words")

let n = new NumberToWord(english);

console.log(n.getWord( 123456789111.04,"MillionAndBillion", "Currency"));
console.log(n.convertToComaSeparetedString(123456789111, "MillionAndBillion"));
console.log(n.convertToComaSeparetedString(123456789111 ));


```


### Use your own language in as JSON
```javascript
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
let n = new NumberToWord(french);
```

## Below is the english version use for trasalating in to your language
Only trasalate array elements.
```javascript
{   
        "single_digits": ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        "teens": ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
       "double_digits": ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
        "crore_lakhs": ["hundred", "thousand", "lakh", "crore"],
        "million_billions": [ "hundred", "thousand","million","billion","trillion","quadrillion"],
        "and_currency": ["and","rupees", "paise", "point"]
    }
```


