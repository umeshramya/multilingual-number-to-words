"use strict";
exports.__esModule = true;
var stringNumber = require("./index");
var curValue = new stringNumber.number_to_string('kananda');
// first value
var firstString = curValue.get_string(34562); //
console.log(firstString);
// second value
var secondString = curValue.get_string(9130456456);
console.log(secondString);
