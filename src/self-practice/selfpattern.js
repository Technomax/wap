// //Self Pattern – problem with inner functions
// const user = {
//   salute: "",
//   greet: function () {
//     //here this refers to the invoking context, here invoking context in user
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     const setFrench = function (newSalute) {
//       //inner function
//       //here this is undefined as the function is invoked from the function itself
//       console.log(this.salute);
//       this.salute = newSalute;

//     };
//     setFrench("Bonjour");
//     //the above set is not executed and the variable contains the previous value
//      console.log(this.salute); //Bonjour??
//    },
// };
// user.greet(); //Hello Hello ??

// //Self Pattern – Legacy Solution
// const user = {
//   salute: "",
//   greet: function () {
//     const self = this;
//     //here self will expose the visible of this to this function
//     //however the inner function can set the value but cannot get the value
//     self.salute = "Hello";
//     console.log(this.salute); //Hello
//     const setFrench = function (newSalute) {
//       //inner function
//       console.log(this.salute); //result is undefined
//       self.salute = newSalute;  //value set to new value and this value is visible out the function
//       console.log(this.salute); //result is undefined
//     };
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour
//   },
// };
// user.greet(); //Hello Bonjour

//this inside arrow function (ES6),
//‘this’ will refer to surrounding lexical scope inside arrow function
// const user = {
//   salute: "",
//   greet: function () {
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     setFrench = (newSalute) => {
//         console.log(this.salute); //return hello
//         this.salute = newSalute;
//         console.log(this.salute); //return new value
//     };
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour
//   },
// };
// user.greet(); //Hello Bonjour

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(function (student) {
      // error – ‘this’ is undefined (or window)
      console.log(this.title + ": " + student);
    });
  },

  showListViaArrow:function(){
    this.students.forEach((student)=>{
        // here arrow function has given the visible of the title 
        //from its parent's lexical environment
        console.log(this.title + ": " + student);
    });
  }
};
console.log("Showing via normal function");
group.showList();
console.log("Showing via arrow function");
group.showListViaArrow();
