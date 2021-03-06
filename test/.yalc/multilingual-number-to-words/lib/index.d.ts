import { english, kananda, telagu, marathi, hindi } from "./config/language";
import { LAN, NumberToWordStyle, DecimalStyle } from "./config/interfaces";
import NumberToWordHandle from "./classes/numberToWordHandle";
declare class NumberToWord extends NumberToWordHandle {
    private _lan;
    constructor(lan?: LAN);
    /**
     * This function returns the number to word
     * @param _number Number
     * @param _style "LakhsAndCrore" | "MillionAndBillion"
     * @param _decimalStyle "Currency" | "Scientific"
     * @returns string
     */
    getWord(_number: number, _style?: NumberToWordStyle, _decimalStyle?: DecimalStyle): string;
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