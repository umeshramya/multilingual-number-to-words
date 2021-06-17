import Hundrad from "./classes/hubndreds/hundred"
import {english} from "./config/language"
import {LAN, NumberToWordStyle} from "./config/interfaces"



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
    /**
     * This function converts number into comaseparted string
     * @param _number  "LakhsAndCrore" | "MillionAndBillion"
     * @param style 
     * @returns string
     */
    public convertToComaSeparetedString = (_number:number, style:NumberToWordStyle="LakhsAndCrore"):string=>{

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
                        ret =`${ret}${numberString.slice(index, 2)},`
                        index = index + 2;

                    }else{
                        loop = false;
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

export {NumberToWord}




