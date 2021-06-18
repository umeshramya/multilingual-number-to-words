"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Single {
    constructor(lan) {
        this._lan = lan;
    }
    getWord(_number) {
        let curIndex = _number;
        let ret = "";
        if (curIndex >= 0 && curIndex < 10) {
            ret = this._lan.single_digits[curIndex];
        }
        return ret;
    }
}
exports.default = Single;
//# sourceMappingURL=singleDigits.js.map