
var lang = require("./language").language;

var addLanguage = (newLanguage, json) =>{
    lang[newLanguage] = json;
}

module.exports.addLanguage = addLanguage;

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
            returnWord = lang[lan]["single_digits"][tNumber] + " " +  lang[lan]["crore_lakhs"][0];
            lNumber = lNumber - (tNumber * 100);
            if(lNumber == 0){
                return returnWord;
            }
        }

        if (lNumber >=20){
            tNumber = Math.floor(lNumber/10);
            returnWord += " " + lang[lan]["double_digits"][tNumber];
            lNumber = lNumber - (tNumber * 10);
            if(lNumber == 0){
                return returnWord;
            }
        }

        if (lNumber >= 10 ){
            tNumber = lNumber - 10;
            returnWord += " " +  lang[lan]["teens"][tNumber];
            if(lNumber == 0){
                return returnWord;
            }
            
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
    }else{
        strComaNumber = stWholeNumber;
    }
    return strComaNumber + stDecimal;
}

module.exports.millonComa = millonComa;

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
    }else{
        strComaNumber = stWholeNumber;
    }
    return strComaNumber + stDecimal;

}

module.exports.lakhComa = lakhComa;

var millionWord = (cNumber, lan="english")=>{
    return numberToWord(cNumber, lan, "million");
}

module.exports.millionWord = millionWord;

var lakhWord = (cNumber, lan="english")=>{
    return numberToWord(cNumber, lan, "lakh");
} 
module.exports.lakhWord = lakhWord;


var numberToWord = (cNumber, lan="english", lakhOrMillion="lakh")=>{
    var lakhMillion ="";
    var comaNumber ="";

    if (lakhOrMillion == "lakh"){
        if (cNumber > 999999998){
            throw (cNumber + " number is too large to handle");
        }
        lakhMillion = "crore_lakhs"
        comaNumber = lakhComa(cNumber);
        

    }else if(lakhOrMillion == "million"){
        if (cNumber > 999999999999998){
            throw (cNumber + " number is too large to handle");
        }
        lakhMillion = "million_billions";
        comaNumber = millonComa(cNumber);
    
    }else{
        throw ("Invalid lakh or million argument");
    }
    var curArray = comaNumber.split(",");
    curArray = curArray.reverse();
    
    
    
    var firstItem = curArray[0];
    var stDecimal = firstItem.substr(firstItem.length-3, firstItem.length);
    curArray[0] = firstItem.substr(0, firstItem.length-3);
   
    
   
    var curArrayLength = curArray.length;
    var lanArray = lang[lan][lakhMillion]
    var lanArrayLength = lanArray.length
    // lanArray= lanArray.reverse();
    
    var returnArray = [];
    var returnWholeNumber ="";
    var words=[];
    for (let i = 0 ; i < curArrayLength; i++) {
        // code for words
        if (i == 0){
            words[i] = wordHundred(parseInt(curArray[i]),lan)

        }else{
            words[i] = wordHundred(parseInt(curArray[i]),lan) + " " + lanArray[i];
        }
    }
    words = words.reverse();

    for (let j = 0; j < words.length; j++) {
        returnWholeNumber += words[j] + " " ;
        
    }
    returnWholeNumber = returnWholeNumber.trim();

    var returnDecimal ="";
    var returnDecimalCurrency="";
    var returnDecimalClassic = "";
    if(stDecimal != ".00"){


        var firtDecimal = lang[lan]["single_digits"][parseInt(stDecimal.substr(1,1))];
        var secondDecimal = lang[lan]["single_digits"][parseInt( stDecimal.substr(2,2))];

        returnDecimalClassic =lang[lan]["and_currency"][3] + " " +  firtDecimal + " "  + secondDecimal;

        if(stDecimal.substr(1,1) === "0"){
            returnDecimal = returnDecimalClassic
            returnDecimalCurrency = returnDecimalClassic+ " " + lang[lan]["and_currency"][2];
        }else{
            returnDecimal = lang[lan]["and_currency"][0] + " " + wordHundred(parseInt(stDecimal.substr(1, 2)),lan).trim();

            returnDecimalCurrency =lang[lan]["and_currency"][0] + " " + wordHundred(parseInt(stDecimal.substr(1, 2)),lan).trim() + " " + lang[lan]["and_currency"][2];
        }

    }
    
    returnArray[0] = returnWholeNumber.trim() + " " + returnDecimal.trim();
    returnArray[1] = ((lang[lan]["and_currency"][1] + " " + returnWholeNumber.trim()).trim() + " " + returnDecimalCurrency.trim()).trim();
    returnArray[2] = (returnWholeNumber.trim()  + " " + returnDecimalClassic.trim()).trim();



   return returnArray;
    

} 



