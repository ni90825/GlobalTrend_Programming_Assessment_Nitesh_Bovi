// Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

const checkmultiple=(number)=>{
    if(number % 3 === 0 && number % 5 !== 0 ){
       return "Fizz"
    }
    else if(number % 3 !== 0 && number % 5 === 0){
        return "Buzz"
    }
    else if(number % 3 === 0 && number % 5 === 0){
        return "FizzBuzz";
    }
    return number;
}

for(let i=1;i<101;i++){
    console.log(checkmultiple(i));
}