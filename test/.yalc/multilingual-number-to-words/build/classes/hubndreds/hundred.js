"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var singleDigits_1 = __importDefault(require("./singleDigits"));
var Hundred = /** @class */ (function () {
    function Hundred(lan) {
        this._lan = lan;
        this._singleDigits = new singleDigits_1.default(this._lan);
    }
    Hundred.prototype.getWord = function (_number) {
        var ret = "";
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
    };
    return Hundred;
}());
exports.default = Hundred;
//# sourceMappingURL=hundred.js.map