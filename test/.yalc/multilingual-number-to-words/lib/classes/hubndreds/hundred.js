"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hundred_less_1 = __importDefault(require("./hundred-less"));
const singleDigits_1 = __importDefault(require("./singleDigits"));
class Hundred {
    constructor(lan) {
        this._lan = lan;
        this._hundredLess = new hundred_less_1.default(this._lan);
        this._singleDigits = new singleDigits_1.default(this._lan);
    }
    getWord(_number) {
        let ret = "";
        let hundredindex = parseInt((_number / 100).toString());
        let tenNumber = _number % 100;
        ret = hundredindex > 0 ? this._singleDigits.getWord(hundredindex) : "";
        ret = `${ret} ${tenNumber > 0 ? this._hundredLess.getWord(tenNumber) : ""}`;
        return ret.trim();
    }
}
exports.default = Hundred;
//# sourceMappingURL=hundred.js.map