import { LAN, WORD } from "../../config/interfaces";

export default class TeenDigits implements WORD{
    private _lan:LAN;
    constructor(lan:LAN){
        this._lan=lan
    }

    getWord(_number:number):string{
        let curIndex = _number%10;
        let ret="";
        if(curIndex > 0 && curIndex < 10){
            ret = this._lan.teens[curIndex];
        }
       
        return ret;
    }
}