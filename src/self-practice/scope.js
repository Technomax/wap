// "use restrict";
// //difference between function and method
// //function can exists without class while method needs object for existence
// //function can have properties while method cannot have properties

// //case 1
//  var caseOne = "case One";
// function show() {
//   console.log(`${this.caseOne}`);
// }
// show(); 
// //result case One
// //here the Lexical context for this inside function is global
// //due to this the result is shown from global context

// //case 2
// function show() {
//   let showOne="Inside function";  
//   //console.log(`${this.showOne}`);
// }
// show(); 
// //result is undefined as show() calling context is window which is aliased to this
// //and this does not have showOne variable

// //case 3
// let phrase="Hello";
// if(true){
//     let user="John"; 
// }
// // console.log(phrase);
// // console.log(user);
// //here use is not defined in Window scope. It is defined in if{} bare code block
// //however, if let user is changed to var user then output will be given
// const meObject={
//      greet:"Hello",
//      show:function(){
//          fName="Anil";
//          showLastName=function(){
//              console.log(`${greet} ${fName} ${lName}`);
//          }
//      }
// };
// console.log(meObject.greet());





function printNumber(x,y){
    let base=1;
    while(x<=y){
        setTimeout(function(x){
            console.log(x);
        },base*1000,x);
        x++;
        base++;
    }
}
printNumber(2,4);