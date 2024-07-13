// Write a function that checks if two given strings are anagrams of each other.

const ps = require("prompt-sync");
const prompt=ps();

let input1=prompt("Enter First Word:");
let input2=prompt("Enter Second Word:");

const checkAnagram=(word1,word2)=>{
    let sum1=0,sum2=0;
    for(let i=0;i<word1.length;i++){
        sum1 += word1.charCodeAt(i)
    }

    for(let i=0;i<word2.length;i++){
        sum2 += word2.charCodeAt(i)
    }

    return sum1 === sum2
}

console.log("Both the words are anagrams:",checkAnagram(input1,input2));