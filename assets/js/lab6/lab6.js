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
console.log("-----------------------------");



//Question 2: Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to
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

//Question 3: In the code there's a setTimeOut call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.
//when will the scheduled function run?
//After the loop
//Before the loop
//In the beginning of the loop
//What is alert going to show?

let i=0;
setTimeout(()=>{
  console.log(i);
},0);

//assume that the time to execute this function is >100ms
for(let j=0;j<1000000000;j++){
  i++;
}