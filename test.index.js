var curNumberModule = require('./index.js');

let hindii = {
    "single_digits" : ['సున్నా', 'ఒక', 'రెండు', 'మూడు', 'నాలుగు', 'ఐదు', 'ఆరు', 'ఏడు', 'ఎనిమిది', 'తొమ్మిది' ],
    "teens"         : ['పది', 'పదకొండు','పన్నెండు','పదమూడు','పద్నాలుగు','పదిహేను', 'పదహారు', 'పదిహేడు', 'పద్దెనిమిది', 'పందొమ్మిది'],
    "double_digits" : ['సున్నా', 'పది', 'ఇరవై', 'ముప్పై', 'నలభై', 'యాభై', 'అరవై', 'డెబ్భై', 'ఎనభై', 'తొంభై'],
    "crore_lakhs"   : ['కోట్ల', 'లక్ష', 'వెయ్యి', 'వంద']
}

var curValue = new curNumberModule.number_to_string("english");

// first value
var firstString = curValue.get_string(3456);//three thousand  four hundred fifty six
console.log(firstString);

// second value
var secondString = curValue.get_string(9130456456);// nine hundred thirteen crore  four lakh  fifty six thousand  four hundred fifty six
console.log(secondString);



