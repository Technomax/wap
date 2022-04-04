class Car {
  //option A
  constructor(options) {
    this.title = options.title;
  }
  // //destructure option B
  // constructor({title}){
  //     this.title=title;
  // }
  drive() {
    return this.title + " " + "vroom";
  }
}

// const car=new Car({title:'toyota'});
// console.log(car.drive());
class Toyota extends Car {
    //whenever we do inheritance we usally donot call de-structure method
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    return "beep";
  }
}

const toyota = new Toyota({ color: "red", title:"Daily Driver" });
console.log("---------");
console.log(toyota.honk());
console.log(toyota);
console.log(toyota.drive());
