const htmlString=`
<p style="color:green;font-weight:bold;">//Create a function using function declaration named sum with one parameter of Array type, the
//returned result is the sum of all elements which are greater than 20.
</p>
"use restrict";
<p style="color:brown;">
const numbers=[20,1,30,40,10,40,5,35];
</p>
function sum(numbers){
   return numbers.filter(number=>number>20).reduce((accum,number)=>accum+number,0);
}
<p style="color:blue;font-weight:bold;">
console.log("The sumer of all elements which are greater than 20 is:: "+sum(numbers));
</p>
<p style="color:green;font-weight:bold;">
// Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.</p>
<p style="color:brown;">
const strings=["Anil","Sachin","Ashish","Shree","Sayal","Siddhant"];
</p>
const getNewArray=function(strings){
    return strings.filter(item=>item.length>5 && item.includes('a'));
}
<p style="color:blue;font-weight:bold;">
console.log(getNewArray(strings)); </p>`;


document.getElementById("app").innerHTML=htmlString;
