"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const singleDigits_1 = __importDefault(require("./singleDigits"));
class DoubleDigits {
    constructor(lan) {
        this._lan = lan;
    }
    getWord(_number) {
        let tenindex = parseInt((_number / 10).toString());
        let singleIndex = _number % 10;
        let ret = "";
        if (tenindex > 0 && tenindex < 10) {
            ret = this._lan.double_digits[tenindex];
        }
        if (singleIndex > 0 && singleIndex < 10) {
            ret = ret + " " + new singleDigits_1.default(this._lan).getWord(singleIndex);
        }
        return ret.trim();
    }
}
exports.default = DoubleDigits;
//# sourceMappingURL=doubleDigits.js.map