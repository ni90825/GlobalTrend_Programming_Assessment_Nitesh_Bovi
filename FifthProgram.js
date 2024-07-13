// Write a function that takes an array and returns a new array with duplicates removed

let a=[1,1,1,1,12,2,3,4,5,5,6,7,8,8,6,2,1,3,43,33,44,43,43];
let withoutduplicate=[];

const RemoveDuplicate = (array) =>{
    for(let i=0;i<array.length;i++){
        if(withoutduplicate.includes(array[i])){
            continue;
        }
        else{
            withoutduplicate.push(array[i])
        }
    }
}

RemoveDuplicate(a)

console.log("Updated_array",withoutduplicate);