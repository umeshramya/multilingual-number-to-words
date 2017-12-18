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
        let crore: number;
        let lakh: number;
        let thousand: number;

        let stCrore = 'crore'
        let stLakh = 'lakh';
        let stThousand = 'thousand';

        
    }


}

let curvalue = new number_to_string(23);
console.log(curvalue.get_string());
