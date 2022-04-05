// function greeting() {
//   console.log(this);
// }
// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(this);
//   },
// };
// //console.log(this); // this is window object
// //greeting(); // greeting() is called by global window object, this is window
// user.sayHi();

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };
// setTimeout(user.sayHi, 2000); //here setimeout refs to global and call of function with this inside remains undefined
//Create a wrapper by using anonymous function or arrow function so that this ref to enclosing object
//wrapper technique can be used whenever you want to pass function as a callback
//A callback is a function passed as an argument to another function.
// setTimeout(function () {
//   user.sayHi();
// }, 2000);
// //Or
// setTimeout(() => user.sayHi(), 2000);

//several techniques to set the ‘this’ context parameter
//bind, apply, call, will change the context of this
// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };
// user.sayHi(); //works
// setTimeout(user.sayHi, 2000); //problem! - this refers to window object
// setTimeout(user.sayHi.bind(user), 2000); //works
// setTimeout(() => user.sayHi.call(user), 2000); //works
// setTimeout(() => user.sayHi.apply(user), 2000); //works
//‘Borrow’ a method that uses ‘this’ via call/apply/bind
const me = {
  first: "John",
  last: "Smith",
  getFullName: function () {
    return this.first + " " + this.last;
  },
};
const log = function (height, weight,z=100) {
  // ‘this’ refers to the invoker
  console.log(this.getFullName() + this.height + " " + weight+" z:"+this.z);
};
console.log(1,2); //1 2
console.log(1,2,200); //1 2 200
const logMe = log.bind(me); //logMe is a new instance of function that is created by bind to be called later
logMe("180cm", "70kg"); // John Smith 180cm 70kg undefined
log.call(me, "180cm", "70kg"); // John Smith 180cm 70kg undefined
log.apply(me, ["180cm", "70kg"]); // John Smith 180cm 70kg undefined
log.bind(me, "180cm", "70kg")(); // John Smith 180cm 70kg undefined

//showing this not working for normal arrow function, where 
//normal this in normal function works
const x = {
    a: 1,
    b: 2,
    add() {
      return this.a + this.b;
    },
  };
  console.log(x.add()); //3
  
  const y = {
    a: 1,
    b: 2,
    add: () => {
      return this.a + this.b;
    },
  };
  console.log(y.add()); //NaN
  