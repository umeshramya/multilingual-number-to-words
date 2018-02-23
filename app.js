var lang = require("./language").language;


var wordHundred = (hunNumber, lan)=>{
		/*
			this function returns the number from 999 to 1 in the form of hundredWords
			This os boiler plate for all decimals 
			has attach suffix like thousand, lakh after number in words
			Number are passed after spliting them  
			splits dpenden on lakh VS million need
		
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

}

var lakhComa = (cNumber)=>{

}

var millionWord = (cNumber, lang, currencyStyle=true)=>{

} 

var lakhWord = (cNumber, lang, currencyStyle=true)=>{
    
} 

console.log(wordHundred(214, "english"));
