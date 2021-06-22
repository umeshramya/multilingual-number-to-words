"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const doubleDigits_1 = __importDefault(require("./doubleDigits"));
const singleDigits_1 = __importDefault(require("./singleDigits"));
const teenDigits_1 = __importDefault(require("./teenDigits"));
class HundredLess {
    constructor(lan) {
        this._lan = lan;
        this._singleDigits = new singleDigits_1.default(this._lan);
        this._double_digits = new doubleDigits_1.default(this._lan);
        this.teenDigits = new teenDigits_1.default(this._lan);
    }
    getWord(_number) {
        let ret = "";
        if (_number > 99 && _number < 0) {
            ret = "";
        }
        else if (_number >= 0 && _number < 10) {
            ret = this._singleDigits.getWord(_number);
        }
        else if (_number > 10 && _number < 20) {
            ret = this.teenDigits.getWord(_number);
        }
        else {
            ret = this._double_digits.getWord(_number);
        }
        return ret.trim();
    }
}
exports.default = HundredLess;
//# sourceMappingURL=hundred-less.js.map