"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const singleDigits_1 = __importDefault(require("./singleDigits"));
class Hundred {
    constructor(lan) {
        this._lan = lan;
        this._singleDigits = new singleDigits_1.default(this._lan);
    }
    getWord(_number) {
        let ret = "";
        if (_number > 99 && _number < 0) {
            ret = "";
        }
        else if (_number === 0) {
            ret = this._singleDigits.getWord(_number);
        }
        else if (_number > 0 && _number <= 10) {
            ret = this._singleDigits.getWord(_number);
        }
        return ret;
    }
}
exports.default = Hundred;
//# sourceMappingURL=hundred.js.map