"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberToWord = void 0;
var hundred_1 = __importDefault(require("./classes/hubndreds/hundred"));
var language_1 = require("./config/language");
var NumberToWord = /** @class */ (function () {
    function NumberToWord(lan) {
        if (lan === void 0) { lan = language_1.english; }
        this._lan = lan;
    }
    NumberToWord.prototype.getWord = function (_number) {
        var ret = "";
        ret = new hundred_1.default(this._lan).getWord(_number);
        return ret;
    };
    return NumberToWord;
}());
exports.NumberToWord = NumberToWord;
//# sourceMappingURL=index.js.map