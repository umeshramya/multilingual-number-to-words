import { LAN, NumberToWordStyle, WORD } from "../../config/interfaces";
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

    private convertToComaSeparetedString = (_number:number, style:NumberToWordStyle):string=>{

        let numberString = `${_number}`;
        let ret = ""
        let hundradpart = numberString.slice(numberString.length -3, numberString.length)
        numberString = numberString.slice(0, numberString.length -3);

        if(numberString.length > 3){
            if(style === "MillionAndBillion"){
                let loop=true;
                let index =0
                while(loop){
                    if(index > numberString.length){
                        loop = false;
                    }else{
                        ret =`${ret}${numberString.slice(index, 3)},`
                        index = index + 3;
                    }
                }

            }else{

                let loop=true;
                let index =0
                while(loop){
                    if(index > numberString.length){
                        loop = false;
                    }else{
                        ret =`${ret}${numberString.slice(index, 2)},`
                        index = index + 2;
                    }

                    
                }

            }
            ret = `${ret},${hundradpart}`
        }else{
            ret = hundradpart;
        }

       
        return numberString;
    
    }


}