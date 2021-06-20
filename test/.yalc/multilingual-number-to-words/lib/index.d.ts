import { english, kananda, telagu, marathi, hindi } from "./config/language";
import { LAN, NumberToWordStyle } from "./config/interfaces";
declare class NumberToWord {
    private _lan;
    constructor(lan?: LAN);
    getWord(_number: number): string;
    /**
     * This function converts number into comaseparted string array
     * @param _number  "LakhsAndCrore" | "MillionAndBillion"
     * @param style
     * @returns string[]
     */
    private convertComaSepartedArray;
    /**
     * This function converts number into comaseparted string
     * @param _number  "LakhsAndCrore" | "MillionAndBillion"
     * @param style
     * @returns string
     */
    convertToComaSeparetedString: (_number: number, style?: NumberToWordStyle) => string;
}
export { NumberToWord, english, kananda, telagu, marathi, hindi };
export type { LAN };
//# sourceMappingURL=index.d.ts.map