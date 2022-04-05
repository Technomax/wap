let animal = {
	eats: true
}
//declaring the variable and set the value of the variable as properties
let props = "valueProps"
animal[props]="Jumping via Prop";
//adding property directly
animal.directProps="Adding direct properties"
//---------------------------------------------------------

let rabbit=Object.create(rabbit); //this will result in error when
var rabbit2= Object.create(rabbit2) //undefined
//this refers to object always before .dot
//in arrow function in the object method, this refers to the surrounding environment that is global context
//arrow function is mostly to be used in function not in object method
//------------------------------------------------------------------------------------------------
//[important] descendent object can run its own method, and will modify its own property state
///loop over the object using for ... in
//for (let prop in rabbit){
//if(rabbit.hasOwnProperty(prop))
//console.log(prop, rabbit.prop, rabbit[prop], rabbit['prop']))}

//[Very important] Object.key(rabbit)
//If you want to create an object using fucntion  use, constructor functions 
//constructor functions technically are regular functions, 
//start with capital letter, and use new function
//function User{props="abc"; isAdmin="false"} let p1= new User("John");

function User(name)
{
    this.name=name;    //if you use use strict then this would be undefined or else this will refer to calling context
    this.isAdmin=true;
}
User("Anil");   
//to create object use constructor functions
let person= New User("Anil");  
///this keyword inside function before implicitly empty 
//and value is added in this keyword is, which is eventually returned
//if you, have return in constructor function, u will still get the implicit this object returned
//prototype::all functions has this property and value of this is an object
//[[Prototype]] ==>this one is for parent ref.
//so function has [[Prototype]] and prototype both
//for object creating constructor [[prototype]] always refers to User.Prototype
//add new function to Function ProtoType as User.prototype.setName=function(){...}
//User.prototype.___proto___ refers to Object.Prototype which is different from Object
//console.dir(function.prototype)
//all function prototype will go to object prototype
