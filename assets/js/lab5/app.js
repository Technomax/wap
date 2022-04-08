//Create a function using function declaration named sum with one parameter of Array type, the
//returned result is the sum of all elements which are greater than 20.
"use restrict";
const numbers=[20,1,30,40,10,40,5,35];
function sum(numbers){
   return numbers.filter(number=>number>20).reduce((accum,number)=>accum+number,0);
}
console.log("The sumer of all elements which are greater than 20 is:: "+sum(numbers));

const sum2=(arr)=>arr.filter(x=>x>20).reduce((previous,current,index,array)=>previous+current,0);

console.log(sum2(numbers));
// Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.
const strings=["Anil","Sachin","Ashish","Shree","Sayal","Siddhant"];
const getNewArray=(strings)=>{
    return strings.filter(item=>item.length>5 && item.includes('a'));
}
console.log(getNewArray(strings));

