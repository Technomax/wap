"use restrict";
//difference between function and method
//function can exists without class while method needs object for existence
//function can have properties while method cannot have properties

//case 1
var caseOne = "case One";
function show() {
  console.log(`${this.caseOne}`);
}
show();
//result case One
//here the Lexical context for this inside function is global
//due to this the result is shown from global context

//case 2
function show() {
  let showOne = "Inside function";
  //console.log(`${this.showOne}`);
}
show();
//result is undefined as show() calling context is window which is aliased to this
//and this does not have showOne variable

//case 3
let phrase = "Hello";
if (true) {
  let user = "John";
}
// console.log(phrase);
// console.log(user);
//here use is not defined in Window scope. It is defined in if{} bare code block
//however, if let user is changed to var user then output will be given
// console.log("--------------");
// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };

// let log=function(height){
//     this.sayHi();
// }

// //let laterCall=log.bind(user,10); laterCall(10);
// log.apply(user,[10]);
// log.call(user,10);

// const user = {
//   salute: "",
//   greet: function () {
//     console.log(this);
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     const setFrench =  (newSalute)=> {
//       //inner function
//       console.log(this);
//       this.salute = newSalute;
//     };
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour??
//   },
// };
// user.greet();

// const group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach((student) => {
//       console.log(student);
//     });
//   },
// };
// group.showList();

// const x = {
//   a: 1,
//   b: 2,
//   add() {
//     return this.a + this.b;
//   },
// };
// console.log(x.add()); //3

const y = {
  a: 1,
  b: 2,
  add: () => {
    return this.a + this.b;
  },
};
console.log(y.add()); //NaN
