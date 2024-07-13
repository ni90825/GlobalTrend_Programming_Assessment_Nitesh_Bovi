// Write a function that generates the first n numbers of the Fibonacci sequence

const ps = require("prompt-sync");

const prompt = ps();

const input=parseInt(prompt("Enter the series length you require:"),10)

const Fibonacci_series = (n) =>{
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return Fibonacci_series(n-1) + Fibonacci_series(n-2);
}

console.log(Fibonacci_series(input));