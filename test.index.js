var curNumberModule = require('./index.js');

var curValue = new curNumberModule.number_to_string();

// first value
var firstString = curValue.get_string(3456);//three thousand  four hundred fifty six
console.log(firstString);

// second value
var secondString = curValue.get_string(9130456456);// nine hundred thirteen crore  four lakh  fifty six thousand  four hundred fifty six
console.log(secondString);



