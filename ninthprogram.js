// Write a function that filters out even numbers from an array

let a = [32,54,23,53,6,3,4,23,5,63,53,23];

const filterfun=(numarray)=>{
    a=numarray.filter((items)=>{
        return items % 2 !== 0 
    })
}
filterfun(a)
console.log(a)