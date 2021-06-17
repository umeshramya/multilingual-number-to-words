import { LAN, NumberToWordStyle } from "./config/interfaces";
declare class NumberToWord {
    private _lan;
    constructor(lan?: LAN);
    getWord(_number: number): string;
    /**
     * This function converts number into comaseparted string
     * @param _number  "LakhsAndCrore" | "MillionAndBillion"
     * @param style
     * @returns string
     */
    convertToComaSeparetedString: (_number: number, style?: NumberToWordStyle) => string;
}
export { NumberToWord };
//# sourceMappingURL=index.d.ts.map