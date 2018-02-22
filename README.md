# multilingual-number-to-words
![verson](https://img.shields.io/badge/version-4.0.0-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg)

This converts to number in to words. one can get words written in any language. users can add there own language if not included. it also gives numbers in coma separated fashion. one can get results for both lakhs-crore and also in million-billion format
###### This module is written in typescript. 
###### Users or developers can add their own language if not included in this project
As of now Version 3.0.0 following languages are included in this project
1. english (default)
2. kananda
3. hindi
4. telagu
5. marathi
##### To add languages to this module kindly read below
 
## Contributors
-Dr Umesh R Bilagi <umeshbilagi@gmail.com>

## How to use
use this command to include as a node module
###### npm i multilingual-number-to-words


or from git hub download files
-index.ts or index.js
-language.ts or .js
-bundle.js (created using browserify)


index file contains the code and language file contains JSON of languages


for frontend web application we recommend browserify
###### Handling decimal values
Decimal values are returned for example 120.65 as one hundred twenty and sixty five by default. (this is set as default because most prints to words are for financial transactions)


To make decimal value to be returned as one hundred twenty point six and five. call function
your-var.get_string_in_millions_and_billions(90909234567,56753,false);


to make currency prefix at begining and end call function
your-var.get_string_in_millions_and_billions(90909234567,56753,false,true);


###### decimal value truncated to two degits


###### Note maximum number for crore and lakh conversion is 999999998
###### Note maximum number for million and billion conversions is 999999999999998
---
#### Below the code for using in Javascript file


```
var curNumberModule = require("multilingual-number-to-words");


var curValue = new curNumberModule.number_to_string("hindi");
//few languages are added few more will be added


// first value
var firstString = curValue.get_string(3456);//three thousand four hundred fifty six
console.log(firstString);
```


### In Billons
```
var curEnglishValue = new curNumberModule.number_to_string();//defulat is english
var englishMillionString = curEnglishValue.get_string_in_millions_and_billions(90909234567,56753,false,false);


console.log("English in billions");
console.log(englishMillionString);
```
### In Crores
```
console.log("\n\n\nEnglish in crores")
var englishCrooreString = curEnglishValue.get_string_in_lakhs_and_crore(124909092.567);
console.log(englishCrooreString);
```


### Use your own language in as JSON
```
console.log("\n\n\nFrench")
let french = {
"single_digits" : ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"],
"teens" : ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"],
"double_digits" : ["zéro", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix" ],
"crore_lakhs" : ["crore", "lakh", "mille", "cent"],
"million_billions" : ["quadrillion", "billion", "billion", "million", "mille", "cent"],
"and_currency" : ["et", "roupies", "paise", "point"]
}
```
### Adding french JSON as variable
```
var curFrenchValue = new curNumberModule.number_to_string(french);


// first value
var firstFrenchString = curFrenchValue.get_string_in_millions_and_billions(4567623423.70346666666,false,false);//trois mille quatre cent cinquante six
console.log(firstFrenchString);


var secondString = curFrenchValue.get_string(345678,true,true,curNumberModule.crore_or_millions.crore);


// second value
var secondString = curFrenchValue.get_string(9130456456);// neuf cent treize crore quatre lakh cinquante six mille quatre cent cinquante six
console.log(secondString);


```


---
---
#### Coma separted Numbers


##### number in coma serated string in lakh;
```
// number in coma serated string in lakh;
var comaSeparetedNumberlakh= curFrenchValue.get_coma_separted_numbers_lakh(1234567.688);
console.log("\n\n\n\n\Coma separeted Numbers in laks (1234567.688)")
console.log(comaSeparetedNumberlakh);
```
##### number in coma serated string in million;
```
// number in coma serated string in million;
var comaSeparetedNumberMillion= curFrenchValue.get_coma_separted_numbers_million(1234567.688;
console.log("\n\n\n\n\Coma separeted Numbers in Million` (1234567.688)");
console.log(comaSeparetedNumberMillion);
```
---
---
## How add languages to this project i.e in to repository

language.ts file is place add new laungage
Make fork and add language send pull request
use google to convert into words add them in the pattern below in language.ts file
```
"english" : {
"single_digits" : ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
"teens" : ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen","nineteen" ],
"double_digits" : ["zero","ten", "twenty", "thirty", "forty", "fifty","sixty", "seventy", "eighty", "ninety" ],
"crore_lakhs" : ["crore", "lakh", "thousand", "hundred"],
"million_billions" : ["quadrillion", "trillion", "billion", "million","thousand", "hundred"],
"and_currency" : ["and", "rupees", "paise", "point"]
```
