'use restrict';

function Car(options){
    this.title=options.title;
}

Car.prototype.drive=function(){
    return 'vroom';
}

const obj=new Car({title:'Focus'});
console.log(obj.drive());
console.log(obj);


function Toyota(options){
    this.color=options.color;
}

const toyota=new Toyota({color:'red', title:'Daily Driver'});
console.log("-----------------------------");
console.log(toyota);

///////////optionA
function ToyotaA(options){
    Car.call(this,options);
    this.color=options.color;
}

const toyotaA=new ToyotaA({color:'red', title:'Daily Driver'});
console.log("-----------------------------");
console.log(toyotaA);

///////////optionB to access the function too
function ToyotaB(options){
    Car.call(this,options);
    this.color=options.color;
}

ToyotaB.prototype=Object.create(Car.prototype);
ToyotaB.prototype.constructor=ToyotaB;

ToyotaB.prototype.honk=function(){
    return 'beep';
}

console.log("-----------------------------");
const toyotaB=new ToyotaB({color:'red', title:'Daily Driver'});
console.log(toyotaB);
console.log(toyotaB.drive());
console.log(toyotaB.honk());