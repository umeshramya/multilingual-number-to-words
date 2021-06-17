import Hundrad from "./classes/hubndreds/hundred"
import {english} from "./config/language"
import {LAN} from "./config/interfaces"



class NumberToWord{
    private _lan:LAN
    constructor(lan:LAN=english){
        this._lan = lan
    }

    getWord(_number:number):string{
        let ret="";
        ret = new Hundrad(this._lan).getWord(_number);
        return ret;
    }
}

export {NumberToWord}




