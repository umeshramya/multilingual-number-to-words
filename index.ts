import * as moduleLanguage from './language';

export enum crore_or_millions{
    "crore"     = 0,
    "million"   = 1
}

export class number_to_string {

    /* 
        This class takes number wih or without decimals
        It returns the numbers in words
        return is multiligual,
        language.ts contains few languages 
        user or developer can add his own language in his file

        for example 
        let french = {               
                    "single_digits" : ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"],
                    "teens"         : ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"],
                    "double_digits" : ["zéro", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix" ],
                    "crore_lakhs"   : ["crore", "lakh", "mille", "cent"]
                    }
        check test.index.js file

    */

    private __number: number;           //number to be passed
    private single_digits:string[];     // this is array of string ie single digits  numbers
    private teens:string[];             // this is array of string ie teen  numbers
    private double_digits:string[];     // this is array of string ie double digits  numbers
    private crore_lakhs:string[];       // this is array of strings ie crore, lakh thousand in needed language
    private million_billions:string[]    // this is array of string million and billion in needed language
    private and_currency:string[]       // this contains  array of "and", "whole number currency", "decimal part currency"
    private word: string='';            // this is retun word of numbers 

    

    


    public constructor(curLanguage:any = 'english'){
        /*
            This is constructor fucntion 
            Defualt language is english
        */ 
    let optLanguage = moduleLanguage.language[curLanguage];
    
    // checking optLanguage 
    // setting the single_digits double_digits , teen crore_lakhs
    if(optLanguage != null){
        this.single_digits  = optLanguage.single_digits;
        this.teens          = optLanguage.teens;
        this.double_digits  = optLanguage.double_digits;
        this.crore_lakhs    = optLanguage.crore_lakhs;
        this.million_billions = optLanguage.million_billions;
        this.and_currency     = optLanguage.and_currency;

    }else{
        this.single_digits  = curLanguage.single_digits;
        this.teens          = curLanguage.teens;
        this.double_digits  = curLanguage.double_digits;
        this.crore_lakhs    = curLanguage.crore_lakhs;
        this.million_billions = curLanguage.million_billions;
        this.and_currency     = curLanguage.and_currency;
    }


    }



    public get_string(cNumber:number,   
                    decimal_in_curancy_style:boolean=true, currency:boolean = false,
                    __crore_or_millions : crore_or_millions = crore_or_millions.crore){
        this.__number = cNumber;//setting class wide __number
        cNumber = Math.abs(cNumber);// converts the local var to positive value
        let wholeInteger = Math.floor(cNumber); //extracting whole number
        let stwholeInteger:string; //this value stores in words part of whole number

        if (__crore_or_millions == crore_or_millions.crore){
            stwholeInteger = this.   convert_to_string_crore_lakhs(wholeInteger).trim();//gets the whole number in words
        }else if(__crore_or_millions == crore_or_millions.million){
            stwholeInteger = this.   convert_to_string_billions_millions(wholeInteger).trim();//gets the whole number in words
        }else{
            throw new Error("invalid crore or million choice");
        }


        // handling decimals
        let decimal_float:number;
        let decimal:number;
        let stDecimal:string;
        
        //checking for currency style decimal vlaues or decimal style
        if (decimal_in_curancy_style){
            // code for returning decimal values in currency style
            decimal_float =  parseFloat((cNumber - wholeInteger).toFixed(3));
            decimal = parseInt(decimal_float * 100);

            // check for checking string in millions or crores
            if (__crore_or_millions == crore_or_millions.crore){
                //call for crore format      
                stDecimal= this.   convert_to_string_crore_lakhs(decimal).trim();
            }else if(__crore_or_millions == crore_or_millions.million){
                //call for milions and billions format
                stDecimal = this.convert_to_string_billions_millions(decimal).trim();//gets the whole number in words
            }else{
                // if not throw error
                throw new Error("invalid crore or million choice");
            }

        }else{
            // code for returning decimal values in decimal style
            stDecimal = ""
        }

        return this.and_currency[1] + " " + stwholeInteger + " " + this.and_currency[0]+" "  + stDecimal + " "+ this.and_currency[2];
        
        

    }

    private convert_to_string_crore_lakhs(cNumber:number) {        
        let lNumber: number = cNumber;
        

        let crore: number;
        let lakh: number;
        let thousand: number;

        let stCrore:string = '';
        let stLakh:string = '';
        let stThousand:string = '';
        let stHundredLess:string = '';

        // crores
        this.word ='';
        crore = Math.floor(cNumber / Math.pow(10, 7));
        lNumber = lNumber - (crore * Math.pow(10, 7));
        if (crore > 0){
            stCrore = this.get_hundreds_double_digits(crore) + " " + this.crore_lakhs[0] + " ";
        }

        // // lakhs
        this.word = ''; 
        lakh = Math.floor(lNumber / Math.pow(10, 5));
        lNumber = lNumber - (lakh * Math.pow(10, 5));
        if (lakh > 0){
            stLakh = this.get_hundreds_double_digits(lakh) + " " + this.crore_lakhs[1] + " ";
        }

        // thousands
        this.word = ''; 
        thousand = Math.floor(lNumber / Math.pow(10, 3));        
        lNumber = lNumber - (thousand * Math.pow(10, 3));
        if(thousand > 0){
            stThousand = this.get_hundreds_double_digits(thousand) + " " + this.crore_lakhs[2] + " ";
        }

        
        // hundreds 
        this.word = ''; 
        if (lNumber > 0){
            stHundredLess = this.get_hundreds_double_digits(lNumber);
        }
    
        return  stCrore + stLakh + stThousand + stHundredLess.trim();
    }


    private convert_to_string_billions_millions(cNumber:number){


        return this.word

    }

    private get_hundreds_double_digits(__lNumber:number){
        // this function returns the number from 999 to 1 in the form of words
        let tNumber:number=0;

        if (__lNumber > 999){
            throw new Error ('Invalid entry');
        }
        
        if (__lNumber <1000 && __lNumber >= 100){
          // hundreads
            tNumber = Math.floor(__lNumber/100);
            __lNumber = __lNumber - (tNumber * 100);    
            this.word += " " +  this.single_digits[tNumber] + " " + this.crore_lakhs[3] ;
                        
            if (__lNumber > 0){
                this.get_hundreds_double_digits(__lNumber);
            }

        }else if(__lNumber <= 100  && __lNumber >= 20 ){
            // double_digits more than and equal =20
            tNumber = Math.floor(__lNumber/10);
            __lNumber = __lNumber - (tNumber * 10);
            this.word    += " " + this.double_digits[tNumber]; 

            if (__lNumber > 0){
                this.get_hundreds_double_digits(__lNumber);
            }    

        }else if(__lNumber <= 20 && __lNumber >= 10 ){
            // teens
            this.word += " " + this.teens[__lNumber - 10];

        }else if (__lNumber <10 && __lNumber > 0){
            // single digits
            this.word += " " +  this.single_digits[__lNumber];

        }else{
            throw new Error ('Invalid entry');
        }

        return this.word;
        
    }  


}


