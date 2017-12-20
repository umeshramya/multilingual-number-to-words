"use strict";
exports.__esModule = true;
var stringNumber = require("./index");
var curValue = new stringNumber.number_to_string('telagu');
// first value
var firstString = curValue.get_string(34562); //three thousand  four hundred fifty six
console.log(firstString);
// second value
var secondString = curValue.get_string(9130456456); // nine hundred thirteen crore  four lakh  fifty six thousand  four hundred fifty six
console.log(secondString);
