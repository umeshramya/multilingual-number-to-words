# multilingual-number-to-words

Converts to number in to words. one can get words written in any language. users can add there own language if not included
This module is written in typescript

## Contributors
-Dr Umesh R Bilagi <umeshbilagi@gmail.com>

## How to use
use this command to include node module

### npm i multilingual-number-to-words

---
#### @Below the pre for using in Javascript file

```
    var curNumberModule = require("multilingual-number-to-words");
    var curValue = new curNumberModule.number_to_string("hindi");

    // first value
    var firstString = curValue.get_string(3456);//three thousand  four hundred fifty six
    console.log(firstString);

    // second value
    var secondString = curValue.get_string(9130456456);// nine hundred thirteen crore  four lakh  fifty six thousand  four hundred fifty six
    console.log(secondString);

    //How to add new language
    //declare language variables
    let french = {               
        "single_digits" : ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"],
        "teens"         : ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"],
        "double_digits" :  ["zéro", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix" ],
        "crore_lakhs"   : ["crore", "lakh", "mille", "cent"]
    }

     var curFrenchValue = new curNumberModule.number_to_string(french);

    // first value
    var firstFrenchString = curFrenchValue.get_string(3456);//three thousand  four hundred fifty six
    console.log(firstFrenchString);

    // second value
    var secondFrenchString = curFrenchValue.get_string(9130456456);// nine hundred thirteen crore  four lakh  fifty six thousand  four hundred fifty six
    console.log(secondFrenchString);

```

---
### Below the pre for using in Typescript file

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

