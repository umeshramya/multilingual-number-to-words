var lang = require("./language").language;


var wordHundred = (hunNumber, lan)=>{
		/*
			this function returns the number from 999 to 1 in the form of hundredWords
            this is boiler plate for higher number
		*/
					
		var lNumber = hunNumber;
        var tNumber=0;
        var returnWord = "";
		if (hunNumber > 999){
			throw ('hundreds more than 999 not allowed');
        }
        
        if (lNumber > 99){
            tNumber = Math.floor(lNumber/100);
            returnWord = lang[lan]["single_digits"][tNumber] + " " +  lang[lan]["crore_lakhs"][3];
            lNumber = lNumber - (tNumber * 100);
        }

        if (lNumber >=20){
            tNumber = Math.floor(lNumber/10);
            returnWord += " " + lang[lan]["double_digits"][tNumber];
            lNumber = lNumber - (tNumber * 10);
        }

        if (lNumber >= 10 ){
            tNumber = lNumber - 10;
            returnWord += " " +  lang[lan]["teens"][tNumber];
            
        }

        if (lNumber >= 0 && lNumber < 10){
            returnWord += " " +  lang[lan]["single_digits"][lNumber];
            
        }

        return returnWord;
	

}



var millonComa = (cNumber)=>{
    // extract decimal
    cNumber = Math.abs(cNumber); //conver to positive number
    var stDecimal        = (cNumber - Math.floor(cNumber) ).toFixed(2);
    stDecimal 			= stDecimal.substr(1, stDecimal.length);//remove zero be
    var stTruncatedNumber		=  Math.floor(cNumber) + stDecimal;
    var stWholeNumber = Math.floor(cNumber).toString();
    var lastThree		= stWholeNumber.substr(stWholeNumber.length-3);
    var otherNumbers	= stWholeNumber.substring(0, stWholeNumber.length-3);
    var strComaNumber='';


    if(otherNumbers != ''){
        lastThree = ',' + lastThree;
        strComaNumber = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + lastThree;
    }
    return strComaNumber + stDecimal;
}

var lakhComa = (cNumber)=>{
    cNumber = Math.abs(cNumber); //conver to positive number
    var stDecimal        = (cNumber - Math.floor(cNumber) ).toFixed(2);
    stDecimal 			= stDecimal.substr(1, stDecimal.length);//remove zero be
    var stTruncatedNumber		=  Math.floor(cNumber) + stDecimal;
    var stWholeNumber = Math.floor(cNumber).toString();
    var lastThree		= stWholeNumber.substr(stWholeNumber.length-3);
    var otherNumbers	= stWholeNumber.substring(0, stWholeNumber.length-3);
    var strComaNumber='';


    if(otherNumbers != ''){
        lastThree = ',' + lastThree;
        strComaNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    }
    return strComaNumber + stDecimal;

}

var millionWord = (cNumber, lang, currencyStyle=true)=>{

} 

var lakhWord = (cNumber, lang, currencyStyle=true)=>{
    
} 
var number = 203456123.44567;
console.log(millonComa(number));
console.log(lakhComa(number));
