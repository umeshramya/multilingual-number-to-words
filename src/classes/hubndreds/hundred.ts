import { LAN, WORD } from "../../config/interfaces";
import SingleDigits from "./singleDigits"

export default class Hundred implements WORD{
    private _lan:LAN
    private _singleDigits:SingleDigits;
    constructor(lan:LAN){
        this._lan= lan
        this._singleDigits = new SingleDigits(this._lan)
    }

    getWord(_number:number):string{

        let ret="";
        if(_number > 99 && _number < 0){
            ret="";
        }else if(_number === 0){
           ret = this._singleDigits.getWord(_number)
        }else if(_number > 0  && _number <= 10){
            ret = this._singleDigits.getWord(_number)
        }

        

      
        return ret;
    }

}