"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TeenDigits {
    constructor(lan) {
        this._lan = lan;
    }
    getWord(_number) {
        let curIndex = _number % 10;
        let ret = "";
        if (curIndex > 0 && curIndex < 10) {
            ret = this._lan.teens[curIndex];
        }
        return ret;
    }
}
exports.default = TeenDigits;
//# sourceMappingURL=teenDigits.js.map