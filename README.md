<h1>number_to_string </h1>

This converts to number in to words
This module is written in typescript

<h2> How to use </h2>
use this command to include node module

<h3>npm i --save number_to_string </h3>
<hr>
<h4>Below the code for using in Javascript file</h4>
<code>
    var curNumberModule = require('number_to_string');
    var curValue = new curNumberModule.number_to_string();

    // first value
    var firstString = curValue.get_string(3456);//three thousand  four hundred fifty six
    console.log(firstString);

    // second value
    var secondString = curValue.get_string(9130456456);// nine hundred thirteen crore  four lakh  fifty six thousand  four hundred fifty six
    console.log(secondString);

</code>

<hr>
<h4>Below the code for using in Typescript file</h4>

<code>
    import * as stringNumber from './index';

    let curValue = new stringNumber.number_to_string();

    // first value
    let firstString = curValue.get_string(3456);//three thousand  four hundred fifty six
    console.log(firstString);

    // second value
    let secondString = curValue.get_string(9130456456);// nine hundred thirteen crore  four lakh  fifty six thousand  four hundred fifty six
    console.log(secondString);
</code>

