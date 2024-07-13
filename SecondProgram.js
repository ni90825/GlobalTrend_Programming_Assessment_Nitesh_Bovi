// Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result

const ps = require("prompt-sync");
const prompt=ps();
const input_calculation = () =>{
    let input = prompt("Enter the Simple Expression : ");

    return eval(input);
}

console.log(input_calculation());