class number_to_string{
    private __number: number;
    private single_digits = ['zero', 'one', 'three',
                            'four', 'five', 'six', 'seven',
                            'eight', 'nine'];
    private teens = ['eleven', 'twelve', 'thirteen',
                    'fourteen', 'fifteen', 'sixteen', 'seventeen',
                    'eighteen', 'nineteen']

    private double_digits = ['ten', 'twenty', 'thirty', 'fourty',
        'fifty', 'sixty', 'seventy', 'eighty'];
    

    // constructor
    public constructor(cnumber: number) {
        this.__number = cnumber;

    }

    public get_string() {
        let cNumber = this.__number;
        let lNumber: number = 0;

        let crore: number;
        let lakh: number;
        let thousand: number;

        let stCrore = 'crore'
        let stLakh = 'lakh';
        let stThousand = 'thousand';

        crore = Math.floor(cNumber / Math.pow(10, 7));
        lNumber = cNumber - (crore * Math.pow(10, 7));

        lakh = Math.floor(lNumber / Math.pow(10, 5));
        lNumber = cNumber - (lakh * Math.pow(10, 5));

        thousand = Math.floor(lNumber / Math.pow(10, 5));
        lNumber = cNumber - (thousand * Math.pow(10, 5));

        
    }

    private get_hundreds_double_digits(__lNumber:number){
        // this function returns the number from 999 to 1 in the form of words

        if (__lNumber > 999){
            throw new Error ('Invalid entry');
        }
        
        if (__lNumber <1000 && __lNumber > 100){

        }else if(__lNumber <= 100  && __lNumber > 20 ){

        }else if(__lNumber <= 20 && __lNumber >= 10 ){

        }else if ()
    }


}

let curvalue = new number_to_string(23);
console.log(curvalue.get_string());
