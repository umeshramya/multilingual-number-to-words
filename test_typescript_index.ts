import * as stringNumber from './index';

let curValue = new stringNumber.number_to_string();

// first value
let firstString = curValue.get_string_in_millions_and_billions(34562,true,true);//
console.log(firstString);

// second value
let secondString = curValue.get_string_in_lakhs_and_crore(91304566);
console.log(secondString);













