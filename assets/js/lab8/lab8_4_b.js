//Solution 4_b
//linked list by constructor function
const LinkedList = function(){

};

LinkedList.prototype.add = function (value) {
  if (this.value === undefined) {
    this.value = value;
    this.next = null;
  } else {
    let current = this;
    while (current.next != null) {
      current = current.next;
    }
    current.next = { value, next: null };
  }
};

LinkedList.prototype.remove = function (value) {
  if (this.value !== undefined) {
    let current = this;
    let previous = undefined;

    while (current != null) {
      if (current.value === value) {
        if (previous === undefined) {
          this.value = current.next === null ? null : current.next.value;
          this.next = current.next === null ? null : current.next.next;
        } else {
          previous.next = current.next;
        }
        break;
      }
      previous = current;
      current = current.next;
    }
  }
  return false;
};

LinkedList.prototype.print = function () {
  let arr = [];
  let current = this;
  while (current != null) {
    arr.push(current.value);
    current = current.next;
  }
  console.log(`LinkedList{ ${arr.toString()} }`);
  return true;
};

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print(); //Expected Result: LinkedList{1,2,3};
linkedList.remove(2);
linkedList.print(); //Expected Result: LinkedList{1,3};
