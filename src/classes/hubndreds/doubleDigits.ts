import { LAN, WORD } from "../../config/interfaces";
import Single from "./singleDigits";

export default class DoubleDigits implements WORD{

    private _lan:LAN
    constructor(lan:LAN){
        this._lan=lan;
    }

    getWord(_number:number):string{
        let tenindex  = _number/10;
        let singleIndex = _number%10;

        let ret="";
        if(tenindex > 0 && tenindex < 10){
            ret=this._lan.double_digits[tenindex];
        }

        if(singleIndex > 0 && singleIndex < 10){
            ret = ret + " "  + new Single(this._lan).getWord(singleIndex)
        }
        return   ret;
    }
}