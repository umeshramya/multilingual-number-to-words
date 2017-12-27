"use strict";
exports.__esModule = true;
var moduleLanguage = require("./language");
var crore_or_millions;
(function (crore_or_millions) {
    crore_or_millions[crore_or_millions["crore"] = 0] = "crore";
    crore_or_millions[crore_or_millions["million"] = 1] = "million";
})(crore_or_millions = exports.crore_or_millions || (exports.crore_or_millions = {}));
var number_to_string = (function () {
    function number_to_string(curLanguage) {
        if (curLanguage === void 0) { curLanguage = 'english'; }
        this.word = ''; // this is retun word of numbers 
        this.hundredWord = '';
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
        return this.make_string(cNumber, 'million');
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
        return this.make_string(cNumber, 'lakh');
    };
    number_to_string.prototype.make_string = function (cNumber, string_type) {
        if (string_type === void 0) { string_type = 'lakh'; }
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
        var stWholeNumber = "";
        // separte decimal from stCNumber
        var index = stCNumber.lastIndexOf(".");
        if (index >= 0) {
            stWholeNumber = stCNumber.substr(0, index);
        }
        else {
            stWholeNumber = stCNumber;
        }
        var stDecimal = stCNumber.substr(index, stCNumber.length);
        // remove last three number from whole number becuase both and lakh and million have hundreds
        var intHumdreds = parseInt(stWholeNumber.substr(stWholeNumber.length - 3, stWholeNumber.length));
        // create array for holding crore and lakhs break ups
        var crore_lakh = [];
        // creat array for holding million nad billions
        var billion_million = [];
        // stLessWholeNumber this holds string of stWholeNumber - last three digits i.e. hundreds
        var stLessWholeNumber = stWholeNumber.substring(0, stWholeNumber.length - 3);
        if (index == -1) {
            // write code to handle decimals
        }
        // handle whole number
        if (string_type === 'lakh') {
            var loop_times = Math.ceil((stLessWholeNumber.length) / 2);
            for (var i = 0; i < loop_times; i++) {
                crore_lakh[i] = parseInt(stLessWholeNumber.substr(stLessWholeNumber.length - 2, stLessWholeNumber.length));
                stLessWholeNumber = stLessWholeNumber.substr(0, stLessWholeNumber.length - 2);
            }
            for (var i = 0; i < crore_lakh.length; i++) {
                // console.log(this.crore_lakhs[(this.crore_lakhs.length - loop_times -1) +i]);
                this.word += " " + this.get_hundreds_double_digits(crore_lakh[crore_lakh.length - (i + 1)], this.crore_lakhs[(this.crore_lakhs.length - loop_times - 1) + i]);
                this.hundredWord = "";
            }
        }
        else if (string_type === 'million') {
            if (cNumber > 999999999) {
                throw new Error("Number is too large to handle");
            }
            var loop_times = Math.ceil((stLessWholeNumber.length) / 3);
            for (var i = 0; i < loop_times; i++) {
                billion_million[i] = parseInt(stLessWholeNumber.substr(stLessWholeNumber.length - 3, stLessWholeNumber.length));
                stLessWholeNumber = stLessWholeNumber.substr(0, stLessWholeNumber.length - 3);
            }
            for (var i = 0; i < billion_million.length; i++) {
                this.word += " " + this.get_hundreds_double_digits(billion_million[billion_million.length - (i + 1)], this.million_billions[(this.million_billions.length - loop_times - 1) + i]);
                this.hundredWord = "";
            }
        }
        // this 
        this.hundredWord = '';
        var stHundred = this.get_hundreds_double_digits(intHumdreds);
        return this.word += " " + stHundred;
    };
    number_to_string.prototype.non_currency_decimal = function (decimal) {
        /*
            this functions converts decimal values into words with single digits
            for example 0.45678 will be outputed as `point four five six seven, eight`
        */
        var stDecimalNum = decimal.toString();
        var indDigits = ""; //this var store single digits in string
        var stDecimal = ''; // whole decimal in number
        for (var index = 0; index < stDecimalNum.length; index++) {
            // var element = array[index];
            if (index != 0) {
                indDigits = stDecimalNum[index];
                if (indDigits == ".") {
                    stDecimal += this.and_currency[3]; //here language specific words has to be added by variable
                }
                else {
                    // stDecimal += " " + this.single_digits[] //number in words has be added
                    stDecimal += " " + this.single_digits[parseInt(indDigits)]; //number in words has be added
                }
            }
        }
        return stDecimal;
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
            throw new Error('Invalid entry');
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
            throw new Error("Invalid entry");
        }
        return (this.hundredWord + " " + suffix).trim();
    };
    return number_to_string;
}()); //end of class
exports.number_to_string = number_to_string;
