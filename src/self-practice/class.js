let animal={
  walk:function(){
    if(!this.isSleeping) {
      alert("I Walk");
    }
  },
  sleep: function() {
    this.isSleeping = true;
    }
}
let rabbit = Object.create(animal);
let deer = Object.create(animal);
rabbit.name = "White Rabbit";
rabbit.sleep();
console.log(rabbit.isSleeping);
console.log(deer.isSleeping);