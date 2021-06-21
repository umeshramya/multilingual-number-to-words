import { LAN, WORD } from "../../config/interfaces";
export default class Hundred implements WORD {
    private _lan;
    private _singleDigits;
    private _double_digits;
    private teenDigits;
    constructor(lan: LAN);
    getWord(_number: number): string;
}
//# sourceMappingURL=hundred.d.ts.map