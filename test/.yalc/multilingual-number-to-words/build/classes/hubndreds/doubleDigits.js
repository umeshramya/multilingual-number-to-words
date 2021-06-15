"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleDigits = /** @class */ (function () {
    function DoubleDigits(lan) {
        this._lan = lan;
    }
    DoubleDigits.prototype.getWord = function (_number) {
        var curindex = _number / 10;
        var ret = "";
        if (curindex > 0 && curindex < 10) {
            ret = this._lan.double_digits[curindex];
        }
        return ret;
    };
    return DoubleDigits;
}());
exports.default = DoubleDigits;
//# sourceMappingURL=doubleDigits.js.map