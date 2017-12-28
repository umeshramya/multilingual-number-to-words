"use strict";
exports.__esModule = true;
var moduleLanguage = require("./language");
var number_to_string = /** @class */ (function () {
    function number_to_string(curLanguage) {
        if (curLanguage === void 0) { curLanguage = 'english'; }
        this.word = ''; //this is retun word of numbers 
        this.hundredWord = ''; //
        /*
            This is constructor fucntion
            Defualt language is english
        */
        var optLanguage = moduleLanguage.language[curLanguage];
        // checking optLanguage 
        // setting the single_digits double_digits , teen crore_lakhs
        if (optLanguage != null) {
            this.single_digits = optLanguage.single_digits;
            this.teens = optLanguage.teens;
            this.double_digits = optLanguage.double_digits;
            this.crore_lakhs = optLanguage.crore_lakhs;
            this.million_billions = optLanguage.million_billions;
            this.and_currency = optLanguage.and_currency;
        }
        else {
            this.single_digits = curLanguage.single_digits;
            this.teens = curLanguage.teens;
            this.double_digits = curLanguage.double_digits;
            this.crore_lakhs = curLanguage.crore_lakhs;
            this.million_billions = curLanguage.million_billions;
            this.and_currency = curLanguage.and_currency;
        }
    }
    number_to_string.prototype.get_string_in_millions_and_billions = function (cNumber, decimal_in_curancy_style, currency) {
        /*
        This returns number in words in millions and billions format
        cNumber :- this is number to written in words
        decimal_in_curancy_style :- example decimal value `0.45` if set to `true` it will write as `and forty five` and false `point four five`
        currency :- true means it will add currency prefix and suffix
        =========================
        */
        //this code using reg exp returns number separted by ,
        if (decimal_in_curancy_style === void 0) { decimal_in_curancy_style = true; }
        if (currency === void 0) { currency = false; }
        return this.make_string(cNumber, 'million', decimal_in_curancy_style, currency);
    };
    number_to_string.prototype.get_string_in_lakhs_and_crore = function (cNumber, decimal_in_curancy_style, currency) {
        /*
        This returns number in words in lakhs  and format format
        cNumber :- this is number to written in words
        decimal_in_curancy_style :- example decimal value `0.45` if set to `true` it will write as `and forty five` and false `point four five`
        currency :- true means it will add currency prefix and suffix
                        =====================
        */
        if (decimal_in_curancy_style === void 0) { decimal_in_curancy_style = true; }
        if (currency === void 0) { currency = false; }
        return this.make_string(cNumber, 'lakh', decimal_in_curancy_style, currency);
    };
    number_to_string.prototype.make_string = function (cNumber, string_type, decimal_in_curancy_style, currency) {
        if (string_type === void 0) { string_type = 'lakh'; }
        if (decimal_in_curancy_style === void 0) { decimal_in_curancy_style = true; }
        if (currency === void 0) { currency = false; }
        /*
            Break the number into decimal, hundereds, thpusand, lakhs, crore
            By convering it to string and conver it to positive value handling
            this function makes string by taking arguments
            cNumber = number for convartion
            string_type = `lakh` or `million`
        */
        this.word = ""; //intiate class wide word as ""
        this.hundredWord = '';
        var stCNumber = Math.abs(cNumber).toString();
        var stWholeNumber = ""; //this variable holds whole number stripped decimals 
        // separte decimal from stCNumber
        var index = stCNumber.lastIndexOf(".");
        if (index >= 0) {
            stWholeNumber = stCNumber.substr(0, index);
        }
        else {
            stWholeNumber = stCNumber;
        }
        var stDecimal = ""; //saparting decimals from whole number
        if (index != -1) {
            stDecimal = stCNumber.substr(index, stCNumber.length);
        }
        // stLessWholeNumber this holds string of stWholeNumber - last three digits i.e. hundreds
        var intDecimal = 0;
        // intDecimals= parseFloat(stDecimal.substr(1, stDecimal.length));//converting stDecimals for purpose of words
        intDecimal = parseFloat((cNumber - Math.floor(cNumber)).toFixed(2));
        // code when curency is be add
        var stPrefix = ""; // this var holds prefix for this.word for ex:- rupees
        var stSuffix = ""; //this var holds the suffix for this.word for ex:- paise
        stPrefix = this.and_currency[1];
        var stDecimalWords = ''; //varibale for holding words of decimals
        if (intDecimal > 0) {
            this.hundredWord = ''; //reset this value '' so it can be reused as this value is used by this.get_hundreds_double_digits
            //stSuffix added here for pupose of adding decimal currency as suffix in final only if decimal are present
            stSuffix = this.and_currency[2];
            if (intDecimal >= 0.1) {
                stDecimal = intDecimal.toString();
                intDecimal = parseInt(stDecimal.substr(2, stDecimal.length));
                if (decimal_in_curancy_style) {
                    if (intDecimal < 10) {
                        intDecimal = intDecimal * 10;
                    }
                    stDecimalWords = " " + this.and_currency[0] + " " + this.get_hundreds_double_digits(intDecimal);
                }
                else {
                    stDecimalWords = this.non_currency_decimal(intDecimal);
                }
            }
            else {
                // here return single digit number in case of < 0.01
                if (decimal_in_curancy_style) {
                    stDecimalWords = " " + this.and_currency[0] + " " + this.get_hundreds_double_digits(intDecimal * 100);
                }
                else {
                    // retun single digit number prfixed by zero
                    stDecimalWords = this.non_currency_decimal(intDecimal * 100);
                }
            }
        } //end of decimal
        /*
        ===============================================
        manage whole number by useing stWholeNumber var
        ================================================
        */
        this.hundredWord = ''; //reset this value '' so it can be reused as this value is used by this.get_hundreds_double_digits
        var stLessWholeNumber = ""; //this is to strips hundreds from whole number
        var stHundred = ''; //this holds the strings converted hundred part of whole number
        // this if block saparating last three digits of whole number  
        if (stWholeNumber.length > 3) {
            // if the length of whole is more than three digits then 
            stLessWholeNumber = stWholeNumber.substring(0, stWholeNumber.length - 3);
            stHundred = stWholeNumber.substr(stLessWholeNumber.length, stWholeNumber.length);
        }
        else {
            // if not stlesswhole number is set to ''
            // and stHundred is set to stWhole number
            stLessWholeNumber = '';
            stHundred = stWholeNumber;
        }
        // parse the hundred part to int for calling this.get_hundreds_double_digits method
        var intHundred = parseInt(stHundred);
        // create array for holding crore and lakhs break ups
        var crore_lakh = [];
        // create array for holding million nad billions
        var billion_million = [];
        // handle whole number
        var numToStrFixer = 0; // this var for fixing deleted precede 0 by converting to string
        if (string_type === 'lakh') {
            if (cNumber > 999999998) {
                throw new Error("Number is too large to handle");
            }
            var loop_times = Math.ceil((stLessWholeNumber.length) / 2);
            for (var i = 0; i < loop_times; i++) {
                crore_lakh[i] = parseInt(stLessWholeNumber.substr(stLessWholeNumber.length - 2, stLessWholeNumber.length));
                stLessWholeNumber = stLessWholeNumber.substr(0, stLessWholeNumber.length - 2);
            }
            for (var i = 0; i < crore_lakh.length; i++) {
                // code for word creation in lakhs
                this.word += " " + this.get_hundreds_double_digits(crore_lakh[crore_lakh.length - (i + 1)], this.crore_lakhs[(this.crore_lakhs.length - loop_times - 1) + i]);
                this.hundredWord = "";
            }
        }
        else if (string_type === 'million') {
            if (cNumber > 999999999999998) {
                throw new Error("Number is too large to handle");
            }
            var loop_times = Math.ceil((stLessWholeNumber.length) / 3);
            for (var i = 0; i < loop_times; i++) {
                billion_million[i] = parseInt(stLessWholeNumber.substr(stLessWholeNumber.length - 3, stLessWholeNumber.length));
                stLessWholeNumber = stLessWholeNumber.substr(0, stLessWholeNumber.length - 3);
            }
            for (var i = 0; i < billion_million.length; i++) {
                // code for words in millions
                this.word += " " + this.get_hundreds_double_digits(billion_million[billion_million.length - (i + 1)], this.million_billions[(this.million_billions.length - loop_times - 1) + i]);
                this.hundredWord = "";
            }
        }
        this.hundredWord = '';
        var stHundredWords = this.get_hundreds_double_digits(intHundred); //this holds hundres in words
        this.word += " " + stHundredWords + stDecimalWords;
        this.word = this.word.trim();
        // add currecny style if the currency var is true
        if (currency) {
            this.word = stPrefix + " " + this.word + " " + stSuffix;
        }
        return this.word;
    };
    number_to_string.prototype.get_coma_separted_numbers_lakh = function (cNumber, lakh_million) {
        if (lakh_million === void 0) { lakh_million = 'lakh'; }
        // returns the numbers as string with coma separation in lakh format
        return this.get_coma_separted_numbers(cNumber, 'lakh');
    };
    number_to_string.prototype.get_coma_separted_numbers_million = function (cNumber, lakh_million) {
        if (lakh_million === void 0) { lakh_million = 'lakh'; }
        // returns the numbers as string with coma separation in million format
        return this.get_coma_separted_numbers(cNumber, 'million');
    };
    number_to_string.prototype.get_coma_separted_numbers = function (cNumber, lakh_million) {
        if (lakh_million === void 0) { lakh_million = 'lakh'; }
        // this converts the number into coma seprated strings
        //this code using reg exp returns number separted by ,
        var wholeNumber = Math.floor(cNumber);
        var decimal = (cNumber - wholeNumber).toFixed(2);
        var stDecimal = decimal.toString();
        var stWholeNumber = wholeNumber.toString();
        var lastThree = stWholeNumber.substring(stWholeNumber.length - 3);
        var otherNumbers = stWholeNumber.substring(0, stWholeNumber.length - 3);
        var strComaNumber = '';
        if (lakh_million == "lakh") {
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            strComaNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
            return strComaNumber + stDecimal;
        }
        else if (lakh_million == "million") {
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            strComaNumber = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + lastThree;
            return strComaNumber + stDecimal;
        }
    };
    number_to_string.prototype.non_currency_decimal = function (decimal) {
        /*
            this functions converts decimal values into words with single digits
            for example 0.45678 will be outputed as `point four five six seven, eight`
        */
        var stDecimalNum = decimal.toString();
        var singDigits = ''; //(single digits)this var store single digits in string
        var stDecimal = ''; // whole decimal in number
        for (var index = 0; index < stDecimalNum.length; index++) {
            singDigits = stDecimalNum.substr(index, index + 1); //accesing single digits
            stDecimal += this.single_digits[parseInt(singDigits)] + " "; //stDecimal added single disgits in words
        }
        return " " + this.and_currency[3] + " " + stDecimal;
    };
    number_to_string.prototype.get_hundreds_double_digits = function (hunNumber, suffix) {
        /*
            this function returns the number from 999 to 1 in the form of hundredWords
            This os boiler plate for all decimals
            has attach suffix like thousand, lakh after number in words
            Number are passed after spliting them
            splits dpenden on lakh VS million need
        
        */
        if (suffix === void 0) { suffix = ''; }
        var lNumber = hunNumber;
        var tNumber = 0;
        if (hunNumber > 999) {
            throw new Error('hundreds more than 999 not allowed');
        }
        if (lNumber > 99) {
            // code for hundreds
            tNumber = Math.floor(lNumber / 100);
            lNumber = lNumber - (tNumber * 100);
            if (tNumber > 0) {
                this.hundredWord += " " + this.single_digits[tNumber] + " " + this.crore_lakhs[3];
            }
            if (lNumber > 0) {
                this.get_hundreds_double_digits(lNumber);
            }
        }
        else if (lNumber <= 99 && lNumber >= 20) {
            // code for double digits
            tNumber = Math.floor(lNumber / 10);
            lNumber = lNumber - (tNumber * 10);
            if (tNumber > 0) {
                this.hundredWord += " " + this.double_digits[tNumber];
            }
            if (lNumber > 0) {
                this.get_hundreds_double_digits(lNumber);
            }
        }
        else if (lNumber <= 19 && lNumber >= 10) {
            // code for teens
            this.hundredWord += " " + this.teens[lNumber - 10];
        }
        else if (lNumber < 10 && lNumber > 0) {
            // code for single digits
            this.hundredWord += " " + this.single_digits[lNumber];
        }
        else {
            // throw new Error(lNumber + " Not a valid number");
        }
        return (this.hundredWord + " " + suffix).trim();
    };
    return number_to_string;
}()); //end of class
exports.number_to_string = number_to_string;
