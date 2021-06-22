import { LAN, WORD } from "../../config/interfaces";
export default class Hundred implements WORD {
    private _lan;
    private _hundredLess;
    private _singleDigits;
    constructor(lan: LAN);
    getWord(_number: number): string;
}
//# sourceMappingURL=hundred.d.ts.map