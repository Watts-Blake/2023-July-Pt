class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Default to empty
    this.head = null;
  }

  addToHead(val) {}

  removeFromHead() {}

  addToTail(val) {
    let currNode = this.head;

    while (currNode.next) {
      currNode = currNode.next;
    }

    let newNode = new LinkedListNode(val);
    currNode.next = newNode;
  }
}

const newLinkedList = new LinkedList();

// const arr = [ 2,  3]

// arr.push(2)
// arr.pop()

// arr.unshift(1)
// arr.shift()

class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const queue = [];

queue.push(2);

queue.shift();

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.addToTail(value);
  }

  dequeue() {
    const value = this.linkedList.head.value;
    this.linkedList.removeFromHead();

    return value;
  }
}
