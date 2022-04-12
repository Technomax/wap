Array.prototype.even = function () {
  return this.filter((x) => x % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((x) => x % 2 !== 0);
};

console.log(`Even output: ${[1,2,3,4,5,6,7,8].even()}`);
console.log(`Odd output: ${[1,2,3,4,5,6,7,8].odd()}`);