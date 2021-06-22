"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const singleDigits_1 = __importDefault(require("./hubndreds/singleDigits"));
const hundred_1 = __importDefault(require("./hubndreds/hundred"));
class NumberToWordHandle {
    constructor() {
        /**
         * This function converts number into comaseparted string array
         * @param _number  "LakhsAndCrore" | "MillionAndBillion"
         * @param style
         * @returns string[]
         */
        this.convertComaSepartedArray = (_number, style = "LakhsAndCrore") => {
            let numberString = _number.toString();
            let ret = "";
            let hundradpart = "";
            if (numberString.length <= 3) {
                hundradpart = numberString.substring(0, numberString.length);
            }
            else {
                hundradpart = numberString.substring(numberString.length - 3);
            }
            if (numberString.length > 3) {
                numberString = numberString.slice(0, numberString.length - 3);
                numberString = numberString.split("").reverse().join("");
            }
            else {
                numberString = "";
            }
            let stringArray = [];
            if (numberString.length > 0) {
                if (style === "MillionAndBillion") {
                    let loop = true;
                    let index = 0;
                    while (loop) {
                        if (index < numberString.length) {
                            let temp = numberString.substring(index, index + 3);
                            stringArray.push(temp);
                            index = index + 3;
                        }
                        else {
                            loop = false;
                        }
                    }
                }
                else {
                    let loop = true;
                    let index = 0;
                    while (loop) {
                        if (index < numberString.length) {
                            let temp = numberString.substring(index, index + 2);
                            stringArray.push(temp);
                            index = index + 2;
                        }
                        else {
                            loop = false;
                        }
                    }
                }
            }
            let RetArray = stringArray.map(el => {
                return el.split("").reverse().join("");
            });
            RetArray.reverse().push(hundradpart);
            return RetArray;
        };
    }
    /**
     * This converts the decimal number into words
     * @param _number decimal number
     * @param _decimalStyle "Currency" | "Scientific"
     * @returns decimal in string
     */
    DecimalNumberWord(_number, _decimalStyle, lan) {
        let ret = "";
        if (_decimalStyle === "Scientific") {
            let single_digits = new singleDigits_1.default(lan);
            _number.toString().split("").forEach(el => {
                ret = ret + " " + single_digits.getWord(parseInt(el));
            });
        }
        else {
            let hundrad = new hundred_1.default(lan);
            ret = hundrad.getWord(parseInt(_number.toString().substring(0, 2)));
        }
        return ret;
    }
    /**
     * This retuen whole number  in words
     * @param _number
     * @param _style "LakhsAndCrore" | "MillionAndBillion"
     * @returns string
     */
    WholeNumberWord(_number, _lan, _style = "LakhsAndCrore") {
        let ret = "";
        let hundrad = new hundred_1.default(_lan);
        let numberArray = this.convertComaSepartedArray(_number, _style);
        let numberStringArray = numberArray.map((el, i) => {
            let numberWord = hundrad.getWord(parseInt(el));
            let place = "";
            if (parseInt(el) === 0) {
                return "";
            }
            else {
                if (_style === "LakhsAndCrore" && i < numberArray.length - 1) {
                    place = _lan.crore_lakhs[numberArray.length - 1 - i];
                }
                else if (_style === "MillionAndBillion" && i < numberArray.length - 1) {
                    place = _lan.million_billions[numberArray.length - 1 - i];
                }
                return `${numberWord} ${place}`;
            }
        });
        numberStringArray.forEach(el => {
            ret = ret + " " + el;
        });
        return ret;
    }
}
exports.default = NumberToWordHandle;
//# sourceMappingURL=numberToWordHandle.js.map