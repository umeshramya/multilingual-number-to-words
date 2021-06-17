"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberToWord = void 0;
var hundred_1 = __importDefault(require("./classes/hubndreds/hundred"));
var language_1 = require("./config/language");
var NumberToWord = /** @class */ (function () {
    function NumberToWord(lan) {
        if (lan === void 0) { lan = language_1.english; }
        /**
         * This function converts number into comaseparted string
         * @param _number  "LakhsAndCrore" | "MillionAndBillion"
         * @param style
         * @returns string
         */
        this.convertToComaSeparetedString = function (_number, style) {
            if (style === void 0) { style = "LakhsAndCrore"; }
            var numberString = "" + _number;
            var ret = "";
            var hundradpart = numberString.slice(numberString.length - 3, numberString.length);
            numberString = numberString.slice(0, numberString.length - 3);
            if (numberString.length > 3) {
                if (style === "MillionAndBillion") {
                    var loop = true;
                    var index = 0;
                    while (loop) {
                        if (index > numberString.length) {
                            loop = false;
                        }
                        else {
                            ret = "" + ret + numberString.slice(index, 3) + ",";
                            index = index + 3;
                        }
                    }
                }
                else {
                    var loop = true;
                    var index = 0;
                    while (loop) {
                        if (index > numberString.length) {
                            ret = "" + ret + numberString.slice(index, 2) + ",";
                            index = index + 2;
                        }
                        else {
                            loop = false;
                        }
                    }
                }
                ret = ret + "," + hundradpart;
            }
            else {
                ret = hundradpart;
            }
            return numberString;
        };
        this._lan = lan;
    }
    NumberToWord.prototype.getWord = function (_number) {
        var ret = "";
        ret = new hundred_1.default(this._lan).getWord(_number);
        return ret;
    };
    return NumberToWord;
}());
exports.NumberToWord = NumberToWord;
//# sourceMappingURL=index.js.map