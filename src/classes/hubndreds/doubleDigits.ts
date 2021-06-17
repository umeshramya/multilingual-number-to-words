import { LAN, WORD } from "../../config/interfaces";

export default class DoubleDigits implements WORD{

    private _lan:LAN
    constructor(lan:LAN){
        this._lan=lan;
    }

    getWord(_number:number):string{
        let curindex  = _number/10;
        let ret="";
        if(curindex > 0 && curindex < 10){
            ret=this._lan.double_digits[curindex];
        }
        return   ret;
    }
}