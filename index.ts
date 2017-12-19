
// export default class number_to_string {'./index'};


// declare let module :any
// module.exports = 
 export class number_to_string{
    private __number: number;
    private single_digits =['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    private teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen' ];
    
    private double_digits =  ['zero','ten', 'twenty', 'thirty', 'fourty', 'fifty','sixty', 'seventy', 'eighty', 'ninty' ];
    
    private word: string='';

    public constructor(){
        this.word = '';
        this.__number = 0 ;
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
            stCrore = this.get_hundreds_double_digits(crore) + " crore ";
        }

        // // lakhs
        this.word = ''; 
        lakh = Math.floor(lNumber / Math.pow(10, 5));
        lNumber = lNumber - (lakh * Math.pow(10, 5));
        if (lakh > 0){
            stLakh = this.get_hundreds_double_digits(lakh) + " lakh ";
        }

        // thousands
        this.word = ''; 
        thousand = Math.floor(lNumber / Math.pow(10, 3));        
        lNumber = lNumber - (thousand * Math.pow(10, 3));
        if(thousand > 0){
            stThousand = this.get_hundreds_double_digits(thousand) + " thousand ";
        }

        
        // hundreds 
        this.word = ''; 
        if (lNumber > 0){
            stHundredLess = this.get_hundreds_double_digits(lNumber);
        }
    
        return stCrore + stLakh + stThousand + stHundredLess;        
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
            this.word += " " +  this.single_digits[tNumber] + " hundred";
                        
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


