"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hindi = exports.marathi = exports.telagu = exports.kananda = exports.english = exports.NumberToWord = void 0;
const language_1 = require("./config/language");
Object.defineProperty(exports, "english", { enumerable: true, get: function () { return language_1.english; } });
Object.defineProperty(exports, "kananda", { enumerable: true, get: function () { return language_1.kananda; } });
Object.defineProperty(exports, "telagu", { enumerable: true, get: function () { return language_1.telagu; } });
Object.defineProperty(exports, "marathi", { enumerable: true, get: function () { return language_1.marathi; } });
Object.defineProperty(exports, "hindi", { enumerable: true, get: function () { return language_1.hindi; } });
const numberToWordHandle_1 = __importDefault(require("./classes/numberToWordHandle"));
class NumberToWord extends numberToWordHandle_1.default {
    constructor(lan = language_1.english) {
        super();
        /**
         * This function converts number into comaseparted string
         * @param _number  "LakhsAndCrore" | "MillionAndBillion"
         * @param style
         * @returns string
         */
        this.convertToComaSeparetedString = (_number, style = "LakhsAndCrore") => {
            return this.convertComaSepartedArray(_number, style).toString();
        };
        this._lan = lan;
    }
    /**
     * This function returns the number to word
     * @param _number Number
     * @param _style "LakhsAndCrore" | "MillionAndBillion"
     * @param _decimalStyle "Currency" | "Scientific"
     * @returns string
     */
    getWord(_number, _style = "LakhsAndCrore", _decimalStyle = "Currency") {
        let ret = "";
        if (_style === "MillionAndBillion" && _number > 999999999999998) {
            throw new Error().message = "large Number :- less than 999999999999998 allowed";
        }
        else if (_style === "LakhsAndCrore" && _number > 999999998) {
            throw new Error().message = "large Number :- less than 999999998 allowed";
        }
        let wholeNUmber = parseInt(_number.toString());
        ret = this.WholeNumberWord(wholeNUmber, this._lan, _style);
        let decimalLength = _number.toString().substring(wholeNUmber.toString().length - 1).length;
        if (decimalLength > 1) {
            let decimalNumber = (_number - wholeNUmber).toFixed(decimalLength - 2).substring(2);
            ret = ret + "and " + this.DecimalNumberWord(decimalNumber, _decimalStyle, this._lan);
        }
        return ret;
    }
}
exports.NumberToWord = NumberToWord;
//# sourceMappingURL=index.js.map