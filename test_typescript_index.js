"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringNumber = require("./index");
var curValue = new stringNumber.number_to_string();
// first value
var firstString = curValue.get_string_in_millions_and_billions(34562, true, true); //
console.log(firstString);
// second value
var secondString = curValue.get_string_in_lakhs_and_crore(91304566);
console.log(secondString);
