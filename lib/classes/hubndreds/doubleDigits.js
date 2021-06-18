"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DoubleDigits {
    constructor(lan) {
        this._lan = lan;
    }
    getWord(_number) {
        let curindex = _number / 10;
        let ret = "";
        if (curindex > 0 && curindex < 10) {
            ret = this._lan.double_digits[curindex];
        }
        return ret;
    }
}
exports.default = DoubleDigits;
//# sourceMappingURL=doubleDigits.js.map