class User {
  constructor(a) {
    this.xyz = a; // calls the setter
  }
  
  name() {
    return this.xyz; //property must match the name used in the setter
  }
  set name(value) {
    this.xyz = value; //must set a property name different from the setter name
  }

  sayHi(){
      return this.xyz;
  }
}

user1=new User("Anil");
console.log(user1.name());