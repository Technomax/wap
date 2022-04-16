//promise has two async, callback functions: resolve, reject
//statement inside {} of promise is synchronous
//promise object returned by the new Promise constructor has 
//-state==>initially pending then changes to either fullfilled or rejected
//-result==>initially undefined then changes to value or error
// let promise = new Promise(function (resolve, reject) {
//   const random = Math.random();
//   console.log(random);
//   if (random > 0.5) {
//     resolve("Valid Number");
//   } else {
//     reject("Invalid number");
//   }
// });
// console.log(promise);//result Promise
// promise.then((x) => console.log(x))
//        .then(x=>console.log("Second"))
//        .catch((err) => console.log(err))
//        .finally(() => console.log("Finally"));

async function foo(){
  return "Done";
}

async function bar(){
  console.log("1");
  let result=await foo();
  console.log(result);
  console.log("2");
}
await bar();
console.log("end");
//AWAIT SUSPENDS THE FUNCTION EXECUTION, WHILE
//OTHER SCRIPTS KEEP RUNNING
//-----------------------------------------
// Start
// Inside bar - start
// end
// Done
// Inside bar-end

