//Solution 4_a
//linked list by object literal
let linkedList = {};

linkedList.add = function (value) {
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

linkedList.remove = function (value) {
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

linkedList.print = function () {
  let arr = [];
  let current = this;
  while (current != null) {
    arr.push(current.value);
    current = current.next;
  }
  console.log(`LinkedList{ ${arr.toString()} }`);
  return true;
};

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print(); //Expected Result: LinkedList{1,2,3};
linkedList.remove(2);
linkedList.print(); //Expected Result: LinkedList{1,3};
