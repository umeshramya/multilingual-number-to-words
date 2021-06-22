import { DecimalStyle, LAN, NumberToWordStyle } from "../config/interfaces";
export default class NumberToWordHandle {
    /**
     * This converts the decimal number into words
     * @param _number decimal number
     * @param _decimalStyle "Currency" | "Scientific"
     * @returns decimal in string
     */
    protected DecimalNumberWord(_number: string, _decimalStyle: DecimalStyle, lan: LAN): string;
    /**
     * This retuen whole number  in words
     * @param _number
     * @param _style "LakhsAndCrore" | "MillionAndBillion"
     * @returns string
     */
    protected WholeNumberWord(_number: number, _lan: LAN, _style?: NumberToWordStyle): string;
    /**
     * This function converts number into comaseparted string array
     * @param _number  "LakhsAndCrore" | "MillionAndBillion"
     * @param style
     * @returns string[]
     */
    protected convertComaSepartedArray: (_number: number, style?: NumberToWordStyle) => string[];
}
//# sourceMappingURL=numberToWordHandle.d.ts.map