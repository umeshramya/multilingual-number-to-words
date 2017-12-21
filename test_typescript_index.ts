import * as stringNumber from './index';

let curValue = new stringNumber.number_to_string();

// first value
let firstString = curValue.get_string(34562,true,true,stringNumber.crore_or_millions.crore);//
console.log(firstString);

// second value
let secondString = curValue.get_string(9130456456);
console.log(secondString);













