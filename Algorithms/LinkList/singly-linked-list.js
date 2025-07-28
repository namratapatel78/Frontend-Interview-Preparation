class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  traverse() {
    // [2,4,6]
    var current = this.head; // 2
    var newTail = current;
    var prev = null;
    while (current) {
      // 2, 4, 6
      if (current.next) {
        prev = current; // 2, 4
      }
      current = current.next; // 4, 6
    }
    this.tail = prev;
  }
  pop() {
    if (!this.head) return undefined; // []
    var current = this.head;
    var newTail = current;
    while (current.next) {
      // 2
      newTail = current; // 2
      current = current.next; // 3
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

var list = new SinglyLinkedList();
list.push(2);
list.push(4);
list.push(6);
list;
list.pop();
