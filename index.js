var number_to_string = (function () {
    // constructor
    function number_to_string(cnumber) {
        this.single_digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        this.teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        this.double_digits = ['zero', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty'];
        this.word = '';
        this.__number = Math.abs(cnumber);
    }
    number_to_string.prototype.get_string = function () {
        var cNumber = this.__number;
        var lNumber = cNumber;
        var crore;
        var lakh;
        var thousand;
        var stCrore = '';
        var stLakh = '';
        var stThousand = '';
        var stHundredLess = '';
        // crores
        crore = Math.floor(cNumber / Math.pow(10, 7));
        lNumber = lNumber - (crore * Math.pow(10, 7));
        if (crore > 0) {
            stCrore = this.get_hundreds_double_digits(crore) + " crore ";
        }
        // // lakhs
        this.word = '';
        lakh = Math.floor(lNumber / Math.pow(10, 5));
        lNumber = lNumber - (lakh * Math.pow(10, 5));
        if (lakh > 0) {
            stLakh = this.get_hundreds_double_digits(lakh) + " lakh ";
        }
        // thousands
        this.word = '';
        thousand = Math.floor(lNumber / Math.pow(10, 3));
        lNumber = lNumber - (thousand * Math.pow(10, 3));
        if (thousand > 0) {
            stThousand = this.get_hundreds_double_digits(thousand) + " thousand ";
        }
        // hundreds 
        this.word = '';
        if (lNumber > 0) {
            stHundredLess = this.get_hundreds_double_digits(lNumber);
        }
        return stCrore + stLakh + stThousand + stHundredLess;
    };
    number_to_string.prototype.get_hundreds_double_digits = function (__lNumber) {
        // this function returns the number from 999 to 1 in the form of words
        var tNumber = 0;
        if (__lNumber > 999) {
            throw new Error('Invalid entry');
        }
        if (__lNumber < 1000 && __lNumber >= 100) {
            // hundreads
            tNumber = Math.floor(__lNumber / 100);
            __lNumber = __lNumber - (tNumber * 100);
            this.word += " " + this.single_digits[tNumber] + " hundred";
            if (__lNumber > 0) {
                this.get_hundreds_double_digits(__lNumber);
            }
        }
        else if (__lNumber <= 100 && __lNumber >= 20) {
            // double_digits more than and equal =20
            tNumber = Math.floor(__lNumber / 10);
            __lNumber = __lNumber - (tNumber * 10);
            this.word += " " + this.double_digits[tNumber];
            if (__lNumber > 0) {
                this.get_hundreds_double_digits(__lNumber);
            }
        }
        else if (__lNumber <= 20 && __lNumber >= 10) {
            // teens
            this.word += " " + this.teens[__lNumber - 10];
        }
        else if (__lNumber < 10 && __lNumber > 0) {
            // single digits
            this.word += " " + this.single_digits[__lNumber];
        }
        else {
            throw new Error('Invalid entry');
        }
        return this.word;
    };
    return number_to_string;
}());
var curvalue = new number_to_string(-91313523);
console.log(curvalue.get_string());
