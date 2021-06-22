import {english, kananda, telagu, marathi,hindi} from "./config/language"
import {LAN, NumberToWordStyle, DecimalStyle} from "./config/interfaces"
import NumberToWordHandle from "./classes/numberToWordHandle"



class NumberToWord extends NumberToWordHandle{
    private _lan:LAN
    constructor(lan:LAN=english){
        super()
        this._lan = lan
    }

    /**
     * This function returns the number to word
     * @param _number Number
     * @param _style "LakhsAndCrore" | "MillionAndBillion"
     * @param _decimalStyle "Currency" | "Scientific"
     * @returns string
     */
    getWord(_number:number, _style:NumberToWordStyle="LakhsAndCrore", _decimalStyle: DecimalStyle = "Currency"):string{
        let ret =""
        let wholeNUmber = parseInt(_number.toString())
        let decimalNumber = _number - wholeNUmber
        ret = this.WholeNumberWord(wholeNUmber,this._lan, _style) + " and " + this.DecimalNumberWord(decimalNumber, _decimalStyle,this._lan)
        return  ret;
     }


    /**
     * This function converts number into comaseparted string
     * @param _number  "LakhsAndCrore" | "MillionAndBillion"
     * @param style 
     * @returns string
     */
    public convertToComaSeparetedString = (_number:number, style:NumberToWordStyle="LakhsAndCrore"):string=>{
        return this.convertComaSepartedArray(_number, style).toString();
    }

}

export {NumberToWord,  english, kananda, telagu, marathi,hindi}
export type {LAN}




