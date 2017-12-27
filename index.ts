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
                    "crore_lakhs"   : ["crore", "lakh", "mille", "cent"],
                    "million_billions" : ["quadrillion", "trillion", "billion", "million","thousand"],
                    "and_currency"  : ["and", "rupees", "paise"]
                    }
        check test.index.js file

    */
    public strComaNumaber:string;

    private __number: number;           //number to be passed
    private single_digits:string[];     // this is array of string ie single digits  numbers
    private teens:string[];             // this is array of string ie teen  numbers
    private double_digits:string[];     // this is array of string ie double digits  numbers
    private crore_lakhs:string[];       // this is array of strings ie crore, lakh thousand in needed language
    private million_billions:string[]    // this is array of string million and billion in needed language
    private and_currency:string[]       // this contains  array of "and", "whole number currency", "decimal part currency"
    private word: string='';            // this is retun word of numbers 
    private hundredWord:string='';
    



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

    public get_string_in_millions_and_billions(cNumber:number,   
                    decimal_in_curancy_style:boolean=true, currency:boolean = false){
        /*
        This returns number in words in millions and billions format
        cNumber :- this is number to written in words
        decimal_in_curancy_style :- example decimal value `0.45` if set to `true` it will write as `and forty five` and false `point four five`
        currency :- true means it will add currency prefix and suffix
        =========================
        */ 
        //this code using reg exp returns number separted by ,

        return this.make_string(cNumber, 'million');
        
    }

    public get_string_in_lakhs_and_crore(cNumber:number,   
                    decimal_in_curancy_style:boolean=true, currency:boolean = false){
        /*
        This returns number in words in lakhs  and format format
        cNumber :- this is number to written in words
        decimal_in_curancy_style :- example decimal value `0.45` if set to `true` it will write as `and forty five` and false `point four five`
        currency :- true means it will add currency prefix and suffix
                        =====================
        */

        return this.make_string(cNumber, 'lakh');
    }

    private make_string(cNumber:number, string_type:string='lakh'){
        /*
            Break the number into decimal, hundereds, thpusand, lakhs, crore
            By convering it to string and conver it to positive value handling
            this function makes string by taking arguments
            cNumber = number for convartion
            string_type = `lakh` or `million`
        */   
        this.word = "";//intiate class wide word as ""
        this.hundredWord ='';

        let stCNumber:string = Math.abs(cNumber).toString();
        let stWholeNumber:string = "";
        
        // separte decimal from stCNumber
        let index:number = stCNumber.lastIndexOf(".");
        if(index >= 0){
            stWholeNumber = stCNumber.substr(0, index);
        }else{
             stWholeNumber = stCNumber;
        }
        
        let stDecimal = stCNumber.substr(index, stCNumber.length);

        // remove last three number from whole number becuase both and lakh and million have hundreds
        let intHumdreds:number = parseInt(stWholeNumber.substr(stWholeNumber.length - 3 , stWholeNumber.length));
        
        
        // create array for holding crore and lakhs break ups
        let crore_lakh:number[] = [];
        
        // creat array for holding million nad billions
        let billion_million:number[] = [];
        
        // stLessWholeNumber this holds string of stWholeNumber - last three digits i.e. hundreds
        let stLessWholeNumber = stWholeNumber.substring(0, stWholeNumber.length-3);
        if (index == -1){
            
            // write code to handle decimals
        }
                    // handle whole number
        if (string_type === 'lakh'){
            if (cNumber > 999999998){
                throw new Error("Number is too large to handle");
            }
            let loop_times:number = Math.ceil((stLessWholeNumber.length)/2);
            for (var i = 0; i < loop_times ; i++) {
                crore_lakh[i] = parseInt(stLessWholeNumber.substr(stLessWholeNumber.length-2,stLessWholeNumber.length));
                stLessWholeNumber = stLessWholeNumber.substr(0, stLessWholeNumber.length-2);   
            }
        
        
            for (var i = 0; i < crore_lakh.length; i++) {
                // console.log(this.crore_lakhs[(this.crore_lakhs.length - loop_times -1) +i]);
                this.word += " " + this.get_hundreds_double_digits(crore_lakh[crore_lakh.length - (i +1)]
                                        , this.crore_lakhs[(this.crore_lakhs.length - loop_times -1) +i]) ;
                this.hundredWord="";
            }
            
            
        }else if (string_type === 'million'){

        
            if (cNumber > 999999999999998){
                throw new Error("Number is too large to handle");
            }
            let loop_times:number = Math.ceil((stLessWholeNumber.length)/3);
            for (var i = 0; i < loop_times ; i++) {
                billion_million[i] = parseInt(stLessWholeNumber.substr(stLessWholeNumber.length-3,stLessWholeNumber.length));
                stLessWholeNumber = stLessWholeNumber.substr(0, stLessWholeNumber.length-3);   
            }
        

            for (var i = 0; i < billion_million.length; i++) {

                this.word += " " + this.get_hundreds_double_digits(billion_million[billion_million.length - (i +1)]
                                        , this.million_billions[(this.million_billions.length - loop_times -1) +i]) ;
                this.hundredWord="";
            }
        
        }
        // this 
        this.hundredWord = '';
        let stHundred:string = this.get_hundreds_double_digits(intHumdreds);
        return this.word +=" " + stHundred;
               

    }


    
    private non_currency_decimal(decimal:number){
        /*
            this functions converts decimal values into words with single digits
            for example 0.45678 will be outputed as `point four five six seven, eight`
        */ 
        let stDecimalNum = decimal.toString();
        let indDigits:string=""; //this var store single digits in string
        let stDecimal:string='';// whole decimal in number

        
        for (var index = 0; index < stDecimalNum.length; index++) {
            // var element = array[index];
        
            if(index !=0){//to_string() adds 0 at before point to avoid it
                indDigits = stDecimalNum[index];
                if(indDigits == "."){
                stDecimal += this.and_currency[3];//here language specific words has to be added by variable
                }else{
                    // stDecimal += " " + this.single_digits[] //number in words has be added
                    stDecimal += " " +  this.single_digits[parseInt(indDigits) ]   //number in words has be added
                }
            }
            
        }
            
            
        return stDecimal;

    }

    
    public get_hundreds_double_digits(hunNumber:number, suffix:string = ''){
        /*
            this function returns the number from 999 to 1 in the form of hundredWords
            This os boiler plate for all decimals 
            has attach suffix like thousand, lakh after number in words
            Number are passed after spliting them  
            splits dpenden on lakh VS million need
        
        */
                      
        let lNumber:number=hunNumber;
        let tNumber:number =0;
        if (hunNumber > 999){
            throw new Error ('Invalid entry');
        }

        if (lNumber > 99){
            // code for hundreds
            tNumber = Math.floor(lNumber/100);
            lNumber = lNumber - (tNumber * 100);

            if(tNumber > 0){
                this.hundredWord +=" " + this.single_digits[tNumber] +  " " +this.crore_lakhs[3];
            }
            
            if(lNumber > 0){
                this.get_hundreds_double_digits(lNumber);
            }
          

        }else if (lNumber <=99 && lNumber >=20){
            // code for double digits
            tNumber = Math.floor(lNumber/10);
            lNumber = lNumber - (tNumber * 10);

            if(tNumber > 0){
                this.hundredWord +=" "  + this.double_digits[tNumber];
            }
            
            if(lNumber > 0){
                this.get_hundreds_double_digits(lNumber);
            }

        }
        else if(lNumber <= 19 && lNumber >= 10){
            // code for teens
            this.hundredWord +=" "  + this.teens[lNumber -10];
            
        }else if(lNumber < 10  && lNumber > 0){
            // code for single digits
            this.hundredWord +=" "  + this.single_digits[lNumber];
           

        }else{
            throw new Error("Invalid entry");
        }
        
        return (this.hundredWord + " "  + suffix).trim();
        
    }  
    
    
}//end of class
    
    