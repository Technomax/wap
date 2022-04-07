//Solution 8_3
Array.prototype.sort = function (isAsc) {
  let temp = null;
  let tempIdx = null;
  for (let i = 0; i < this.length; i++) {
    temp = this[i];
    for (let j = i; j < this.length; j++) {
      if (isAsc) {
        if (temp - this[j] >= 0) {
          temp = this[j];
          tempIdx = j;
        }
        else {
          if (temp - this[j] <= 0) {
            temp = this[j];
            tempIdx = j;
          }
        }
      }
      if (tempIdx) {
        holder = this[tempIdx];
        this[tempIdx] = this[i];
        this[i] = holder;
      }
    }
  }
  return this;
};
console.log([31, 12, 11].sort(true));
