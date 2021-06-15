import lan from "../../config/language"
import { LAN } from "../../config/interfaces";

export default class Single{
    private _lan:LAN

    constructor(lan:LAN){
        this._lan = lan
    }

    getWord(_number:number):string{
        let curIndex = _number;
        let ret="";
        if (curIndex >=0 && curIndex < 10){
            ret= this._lan.single_digits[curIndex]
        }
        return ret;
        
    }


}