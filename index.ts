import * as moduleLanguage from './language';

export class number_to_string{
    private __number: number;

    private single_digits:string[];
    private teens:string[];
    private double_digits:string[];
    private crore_lakhs:string[];
 
    private word: string='';

    public constructor(curLanguage:any = 'english'){
    
    let optLanguage = moduleLanguage.language[curLanguage];
    
    if(optLanguage != null){
        this.single_digits  = optLanguage.single_digits;
        this.teens          = optLanguage.teens;
        this.double_digits  = optLanguage.double_digits;
        this.crore_lakhs    = optLanguage.crore_lakhs;

    }else{
        this.single_digits  = curLanguage.single_digits;
        this.teens          = curLanguage.teens;
        this.double_digits  = curLanguage.double_digits;
        this.crore_lakhs    = curLanguage.crore_lakhs;
    }


    }

    public get_string(cNumber:number) {
        this.__number = cNumber;
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

