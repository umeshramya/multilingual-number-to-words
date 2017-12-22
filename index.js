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
        */
        if (decimal_in_curancy_style === void 0) { decimal_in_curancy_style = true; }
        if (currency === void 0) { currency = false; }
        return this.get_string(cNumber, decimal_in_curancy_style, currency, crore_or_millions.million);
    };
    number_to_string.prototype.get_string_in_lakhs_and_crore = function (cNumber, decimal_in_curancy_style, currency) {
        if (decimal_in_curancy_style === void 0) { decimal_in_curancy_style = true; }
        if (currency === void 0) { currency = false; }
        /*
        This returns number in words in lakhs  and format format

        */
        return this.get_string(cNumber, decimal_in_curancy_style, currency, crore_or_millions.crore);
    };
    number_to_string.prototype.get_string = function (cNumber, decimal_in_curancy_style, currency, __crore_or_millions) {
        if (decimal_in_curancy_style === void 0) { decimal_in_curancy_style = true; }
        if (currency === void 0) { currency = false; }
        if (__crore_or_millions === void 0) { __crore_or_millions = crore_or_millions.crore; }
        this.__number = cNumber; //setting class wide __number
        cNumber = Math.abs(cNumber); // converts the local var to positive value
        var wholeInteger = Math.floor(cNumber); //extracting whole number
        var stWholeInteger; //this value stores in words part of whole number
        if (__crore_or_millions == crore_or_millions.crore) {
            stWholeInteger = this.convert_to_string_crore_lakhs(wholeInteger).trim(); //gets the whole number in words
        }
        else if (__crore_or_millions == crore_or_millions.million) {
            stWholeInteger = this.convert_to_string_billions_millions(wholeInteger).trim(); //gets the whole number in words
        }
        else {
            throw new Error("invalid crore or million choice");
        }
        // handling decimals
        var decimal_float;
        var decimal;
        var stDecimal;
        //checking for currency style decimal vlaues or decimal style
        if (decimal_in_curancy_style) {
            // code for returning decimal values in currency style
            decimal_float = parseFloat((cNumber - wholeInteger).toFixed(3));
            decimal = parseInt(decimal_float * 100);
            // check for checking string in millions or crores
            if (__crore_or_millions == crore_or_millions.crore) {
                //call for crore format      
                stDecimal = this.convert_to_string_crore_lakhs(decimal).trim();
            }
            else if (__crore_or_millions == crore_or_millions.million) {
                //call for milions and billions format
                stDecimal = this.convert_to_string_billions_millions(decimal).trim(); //gets the whole number in words
            }
            else {
                // if not throw error
                throw new Error("invalid crore or million choice");
            }
        }
        else {
            // code for returning decimal values in decimal style
            stDecimal = "";
        }
        // this check this currency prefix and suffix to added or not 
        // if true i adds else not and returns
        if (currency) {
            return this.and_currency[1] + " " + stWholeInteger + " " + this.and_currency[0] + " " + stDecimal + " " + this.and_currency[2];
        }
        else {
            return stWholeInteger + " " + this.and_currency[0] + " " + stDecimal;
        }
    };
    number_to_string.prototype.convert_to_string_crore_lakhs = function (cNumber) {
        /*
            convert string into word in lakhs and crore format
        */
        var lNumber = cNumber;
        var crore;
        var lakh;
        var thousand;
        var stCrore = '';
        var stLakh = '';
        var stThousand = '';
        var stHundredLess = '';
        if (lNumber > 9999999999) {
            throw new Error("The number is too large to handle");
        }
        // crores
        this.word = '';
        crore = Math.floor(cNumber / Math.pow(10, 7));
        lNumber = lNumber - (crore * Math.pow(10, 7));
        if (crore > 0) {
            stCrore = this.get_hundreds_double_digits(crore) + " " + this.crore_lakhs[0] + " ";
        }
        // // lakhs
        this.word = '';
        lakh = Math.floor(lNumber / Math.pow(10, 5));
        lNumber = lNumber - (lakh * Math.pow(10, 5));
        if (lakh > 0) {
            stLakh = this.get_hundreds_double_digits(lakh) + " " + this.crore_lakhs[1] + " ";
        }
        // thousands
        this.word = '';
        thousand = Math.floor(lNumber / Math.pow(10, 3));
        lNumber = lNumber - (thousand * Math.pow(10, 3));
        if (thousand > 0) {
            stThousand = this.get_hundreds_double_digits(thousand) + " " + this.crore_lakhs[2] + " ";
        }
        // hundreds 
        this.word = '';
        if (lNumber > 0) {
            stHundredLess = this.get_hundreds_double_digits(lNumber);
        }
        return stCrore + stLakh + stThousand + stHundredLess.trim();
    };
    number_to_string.prototype.convert_to_string_billions_millions = function (cNumber) {
        /*
            converts the number in to words in million and billion format
        */
        var lNumber = cNumber;
        if (lNumber > 99999999999999) {
            throw new Error("Number is too large to handle");
        }
        var quadrillion;
        var trillion;
        var billion;
        var million;
        var thousand;
        var stQuadrillion = '';
        var stTrillion = '';
        var stBillion = '';
        var stMillion = '';
        var stThousand = '';
        var stHundredLess = '';
        // quadrllion
        this.word = '';
        quadrillion = Math.floor(lNumber / Math.pow(10, 15));
        lNumber = lNumber - (quadrillion * Math.pow(10, 15));
        if (quadrillion > 0) {
            stQuadrillion = this.get_hundreds_double_digits(quadrillion) + " " + this.million_billions[0] + " ";
        }
        // trillion
        this.word = '';
        trillion = Math.floor(lNumber / Math.pow(10, 12));
        lNumber = lNumber - (trillion * Math.pow(10, 12));
        if (trillion > 0) {
            stTrillion = this.get_hundreds_double_digits(trillion) + " " + this.million_billions[1] + " ";
        }
        // billions
        this.word = '';
        billion = Math.floor(lNumber / Math.pow(10, 9));
        lNumber = lNumber - (billion * Math.pow(10, 9));
        if (billion > 0) {
            stBillion = this.get_hundreds_double_digits(billion) + " " + this.million_billions[2] + " ";
        }
        //million
        this.word = '';
        million = Math.floor(lNumber / Math.pow(10, 6));
        lNumber = lNumber - (million * Math.pow(10, 6));
        if (million > 0) {
            stMillion = this.get_hundreds_double_digits(million) + " " + this.million_billions[3] + " ";
        }
        // thousands
        this.word = '';
        thousand = Math.floor(lNumber / Math.pow(10, 3));
        lNumber = lNumber - (thousand * Math.pow(10, 3));
        if (thousand > 0) {
            stThousand = this.get_hundreds_double_digits(thousand) + " " + this.million_billions[4] + " ";
        }
        // hundreds 
        this.word = '';
        if (lNumber > 0) {
            stHundredLess = this.get_hundreds_double_digits(lNumber);
        }
        return stQuadrillion + stTrillion + stBillion + stMillion + stThousand + stHundredLess.trim();
    };
    number_to_string.prototype.get_hundreds_double_digits = function (__lNumber) {
        // this function returns the number from 999 to 1 in the form of words
        var tNumber = 0;
        if (__lNumber > 999) {
            throw new Error('Invalid entry');
        }
        if (__lNumber < 1000 && __lNumber >= 100) {
            // hundreads
            tNumber = Math.floor(__lNumber / 100);
            __lNumber = __lNumber - (tNumber * 100);
            this.word += " " + this.single_digits[tNumber] + " " + this.crore_lakhs[3];
            if (__lNumber > 0) {
                this.get_hundreds_double_digits(__lNumber);
            }
        }
        else if (__lNumber <= 100 && __lNumber >= 20) {
            // double_digits more than and equal =20
            tNumber = Math.floor(__lNumber / 10);
            __lNumber = __lNumber - (tNumber * 10);
            this.word += " " + this.double_digits[tNumber];
            if (__lNumber > 0) {
                this.get_hundreds_double_digits(__lNumber);
            }
        }
        else if (__lNumber <= 20 && __lNumber >= 10) {
            // teens
            this.word += " " + this.teens[__lNumber - 10];
        }
        else if (__lNumber < 10 && __lNumber > 0) {
            // single digits
            this.word += " " + this.single_digits[__lNumber];
        }
        else {
            throw new Error('Invalid entry');
        }
        return this.word;
    };
    return number_to_string;
}());
exports.number_to_string = number_to_string;
