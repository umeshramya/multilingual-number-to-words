import { LAN, NumberToWordStyle, WORD } from "../../config/interfaces";
import DoubleDigits from "./doubleDigits";
import SingleDigits from "./singleDigits"
import TeenDigits from "./teenDigits"

export default class HundredLess implements WORD{
    private _lan:LAN
    private _singleDigits:SingleDigits;
    private _double_digits:DoubleDigits;
    private teenDigits:TeenDigits
    constructor(lan:LAN){
        this._lan= lan
        this._singleDigits = new SingleDigits(this._lan)
        this._double_digits = new DoubleDigits(this._lan);
        this.teenDigits = new TeenDigits(this._lan)

    }

    getWord(_number:number):string{
        let ret="";
        if(_number > 99 && _number < 0){
            ret="";

        }else if(_number >= 0  && _number < 10){
            ret = this._singleDigits.getWord(_number)

        }else if(_number > 10 && _number < 20){
            ret = this.teenDigits.getWord(_number)
        }else{
            ret = this._double_digits.getWord(_number)
        }

        

      
        return ret;
    }

    

}