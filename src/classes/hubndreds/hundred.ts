import { LAN,  WORD } from "../../config/interfaces";
import HundredLess from "./hundred-less";
import Single from "./singleDigits";

export default class Hundred implements WORD{
    private _lan:LAN
    private _hundredLess:HundredLess;
    private _singleDigits: Single


    constructor(lan:LAN){
        this._lan= lan
        this._hundredLess = new HundredLess(this._lan)
        this._singleDigits = new Single(this._lan)
    }

    getWord(_number:number):string{
        let ret="";
        let hundredindex  = parseInt((_number/100).toString());
        let tenNumber = _number%100;

        ret = hundredindex > 0 ? this._singleDigits.getWord(hundredindex) : "";
        ret =  `${ret} ${tenNumber > 0  ? this._hundredLess.getWord(tenNumber) : ""}`
    
        return ret.trim();
    }

    

}