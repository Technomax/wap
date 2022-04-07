//this will run in infinte loop as set name is called from constructor function
//also set name is too called from within set name function
class User {
    constructor(name) {
      this.name = name;
    }
    get name() {
      return this.name;
    }
    set name(value) {
      this.name = value;
    }
  }
  

  //correct way of setter and getter
class User {
    constructor(name) {
      this.name = name;
    }
    get name() {
      return this._name;
    }
    set name(value) {
      this._name = value;
    }
  }
  