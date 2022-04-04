let htmlString=`
<p style="color:green;">
//Draw a lexical environment diagram for the right code and show
//existing code
// function makeArmy() {
//   let shooters = [];
//   let i = 0;

//   while (i < 2) {
//     let shooter = function () {
//       console.log(i);
//     };
//     shooters.push(shooter);
//     i++;
//   }
//   return shooters;
// }
// let army = makeArmy();
// army[0];
</p>
//////////////////////////////////////////////////////////////////////////////
//Solution:army[0] will not alert any thing as the army[0] is a function.

//revised code
function makeArmy() {
  let shooters = [];
  let i = 0;

  while (i < 2) {
    let shooter = function () {
      console.log(i);
      return;
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}
let army = makeArmy();
army[0]();

<p style="color:green;">
//Question 2: Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to
</p>
const printNumbers = function (from, to) {
  while(from<=to){
    setTimeout(function(x){
      console.log(x);
    },from*1000,from);
    from++;
  }
return;
};
printNumbers(1, 5);

<p style="color:green;">
//Question 3: In the code there's a setTimeOut call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.
</p>
<span style="color:brown;">
when will the scheduled function run?
o	  The setTimeout function will run as soon as possible after completing the current code execution. Hence, the correct answer is the schedule will be called “After the loop”
What is alert going to show?
o	  The Alert is going show result as: 100000000
</span>

let i=0;
setTimeout(()=>{
  console.log(i);
},0);

//assume that the time to execute this function is >100ms
for(let j=0;j<1000000000;j++){
  i++;
}`;
document.getElementById("app").innerHTML=htmlString;
