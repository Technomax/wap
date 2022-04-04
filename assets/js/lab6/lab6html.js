let htmlString=`
<p style="color:green;">
//Question 1: Draw the lexical environment and correct the code
</p>
function makeArmy() {
  let shooters = [];
  let i = 0;

  while (i < 2) {
    let x=i;
    let shooter = function () {
      alert(x);
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}
let army = makeArmy();
army[1];

<p style="color:green;">
//Question 2: Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to
</p>
const printNumbers = function (from, to) {
  let base=1;
    while(from<=to){
      setTimeout(function(x){
        console.log(x);
        base++;
      },from*1000,from);
      from++;
    }
  return;
};
printNumbers(1, 5);
<p style="color:green;">
//Question 3: In the code there's a setTimeOut call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.
</p>
let i=0;
setTimeout(()=>{
  console.log(i);
},0);

//assume that the time to execute this function is >100ms
for(let j=0;j<1000000000;j++){
  i++;
}
}`;
document.getElementById("app").innerHTML=htmlString;
