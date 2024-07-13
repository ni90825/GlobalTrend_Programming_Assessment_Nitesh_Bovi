// Write a function that takes a nested array and returns a flattened array

const a=[1,[1,2,3],4,5];
const ar=[1,2,[4,5,[6]],7,8,[11,12,[13,14]]];
let flattened_array=[];

const multiarraycheck = (para_ar) =>{
    for(let i=para_ar.length-1;i>=0;i--){
        if(Array.isArray(para_ar[i])){
            multiarraycheck(para_ar[i])
        }
        else{
            flattened_array.unshift(para_ar[i]);
        }
    }
}

multiarraycheck(a)
console.log(flattened_array);

flattened_array=[]

multiarraycheck(ar)
console.log(flattened_array);