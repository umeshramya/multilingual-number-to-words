"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberToWord = void 0;
const hundred_1 = __importDefault(require("./classes/hubndreds/hundred"));
const language_1 = require("./config/language");
class NumberToWord {
    constructor(lan = language_1.english) {
        /**
         * This function converts number into comaseparted string
         * @param _number  "LakhsAndCrore" | "MillionAndBillion"
         * @param style
         * @returns string
         */
        this.convertToComaSeparetedString = (_number, style = "LakhsAndCrore") => {
            let numberString = `${_number}`;
            let ret = "";
            let hundradpart = numberString.slice(numberString.length - 3, numberString.length);
            numberString = numberString.slice(0, numberString.length - 3);
            let stringArray = [];
            numberString = numberString.split("").reverse().join("");
            if (numberString.length > 3) {
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
            ret = RetArray.toString();
            return ret;
        };
        this._lan = lan;
    }
    getWord(_number) {
        let ret = "";
        ret = new hundred_1.default(this._lan).getWord(_number);
        return ret;
    }
}
exports.NumberToWord = NumberToWord;
// export type {NumberToWordStyle}
//# sourceMappingURL=index.js.map