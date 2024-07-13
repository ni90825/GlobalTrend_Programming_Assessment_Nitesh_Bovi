// Write a function that takes a string and capitalizes the first letter of each word in the string

const ps=require("prompt-sync");
const prompt = ps();

let input = prompt("Enter the text:")
let str =``;

const Updatingtext=(textarray)=>{
    let word='';
for(let i=0;i<textarray.length;i++){
    if(textarray[i].charAt(0).charCodeAt(0) >= 97 && textarray[i].charAt(0).charCodeAt(0) <= 122){

        word = String.fromCharCode(textarray[i].substring(0,1).charAt(0).charCodeAt(0) - 32) + textarray[i].substring(1,textarray[i].length)
        str+=`${word} `

    }
    else{
        str+=`${textarray[i]} `;
    }
}
str+=` `;
}

Updatingtext(input.split(" "))
console.log(str);