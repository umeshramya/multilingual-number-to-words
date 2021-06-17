"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TeenDigits = /** @class */ (function () {
    function TeenDigits(lan) {
        this._lan = lan;
    }
    TeenDigits.prototype.getWord = function (_number) {
        var curIndex = _number % 10;
        var ret = "";
        if (curIndex > 0 && curIndex < 10) {
            ret = this._lan.teens[curIndex];
        }
        return ret;
    };
    return TeenDigits;
}());
exports.default = TeenDigits;
//# sourceMappingURL=teenDigits.js.map