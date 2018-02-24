
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
var millionWord = (cNumber, lan="english")=>{
    return numberToWord(cNumber, lan, "million");
}

var lakhWord = (cNumber, lan="english")=>{
    return numberToWord(cNumber, lan, "lakh");
} 


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
    
    var returnWord ="";
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
        returnWord += words[j] + " " ;
        
    }
    returnWord = returnWord.trim();

    var returndecimal ="";
    if(stDecimal != ".00"){
        returndecimal = lang[lan]["and_currency"][0] + " " + wordHundred(parseInt(stDecimal.substr(1, 2)),lan).trim();   
    }
    

    return (returnWord + " " + returndecimal).trim();
    

} 


var number = 123224130.896;
console.log(millonComa(number));

console.log( millionWord(number));
console.log( millionWord(number));
console.log( millionWord(number));

console.log("\n\n\n");

console.log(lakhComa(number));
console.log(lakhWord(number, "english"));
console.log(lakhWord(number, "english"));
console.log(lakhWord(number, "english"));


