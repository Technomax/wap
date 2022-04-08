//Could write using just constructor function
function User(name) {
  this.name = name;
}
// Add the method to prototype
User.prototype.sayHi = function () {
  console.log(this.name);
};
// Usage
let user = new User("John");
user.sayHi();
//OR
let user1=Object.create(User);
user1.prototype.sayHe=function(){
    console.log("HEEEE:"+this.name);
}
user.sayHe();