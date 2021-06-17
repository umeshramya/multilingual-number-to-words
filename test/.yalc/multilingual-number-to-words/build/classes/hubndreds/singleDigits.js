"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Single = /** @class */ (function () {
    function Single(lan) {
        this._lan = lan;
    }
    Single.prototype.getWord = function (_number) {
        var curIndex = _number;
        var ret = "";
        if (curIndex >= 0 && curIndex < 10) {
            ret = this._lan.single_digits[curIndex];
        }
        return ret;
    };
    return Single;
}());
exports.default = Single;
//# sourceMappingURL=singleDigits.js.map