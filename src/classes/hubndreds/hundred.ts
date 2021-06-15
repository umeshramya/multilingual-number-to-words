import { LAN } from "../../config/interfaces";

export default class Hundred{
    private _lan:LAN
    constructor(lan:LAN){
        this._lan= lan
    }

    getWord(_number:number):string | boolean{
        if(_number > 99 && _number < 0){
            return false;
        }

        

        let ret="";
        return ret;
    }

}