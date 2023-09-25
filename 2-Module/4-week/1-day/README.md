# M2Wk4D1 Data Structures

## [Learning Boost](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-10---data-structures/learning-boost---monday) 5 Min

<br/>


## Linked List
The linked list is a classic data structure, studied by every computer science student. Much like arrays, linked lists are used to store an ordered sequence of values. But instead of being in a contiguous block of memeory, all of its values are spread out into different memory address. Linked list's do this by using pointers


- Pointers - A pointer is a variable that stores the memory address of another variable as its value.

### How does a linked list do this?
We can do this with a linked list by creating and using nodes.

A linked list is tehcnically an ordered sequence of nodes. Where we have a head, and a pointer to the next value in our list.

So instead of iterating via indices, we will now iterate to each value using it's pointer to the next value.

```
/* The linked list itself is just a pointer to the first node which is called the head node. The list continues until it reaches a null node pointer. If the head pointer itself is null, that means the LinkedList is empty. */

class LinkedList {
  constructor() {
    // Default to empty
    this.head = null;
  }
}

// Each node consists of a data value and a pointer to the next node.
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
```

### Why a Linked List?
In a JS array, we are able to add, remove to the front or back, and also into the middle.

The only downside is that adding or removing to the front/middle of our array will be 0(n) time complexity because of all the reassignments of indices.

With a Linked List, we simply just need to reassign one nodes pointer of the next value in our list which would be 0(1)

This can allow us to have quicker sorting times in specific circumstances which makes knowing a linked list necessary.

### The Downsides to a Linked List
Linked Lists are not able to be indexed into, we will have to traverse our linked list everytime we want to find a value other than the head.

Adding to the end of a linked list will still be 0(n) time complexity.
In order to know where our last pointer is, and assign it to our new node we will need to traverse to the end of our linked list which would mean this is an 0(n) opertion.


<br/>

## Doubly Linked List
A Doubly Linked List in theory is the same thing as a Linked List but with an additional pointer added to each node. And will also give us a reference to our tail node inside of of our list

This Additional pointer will reference the previous node, in order to let each node have a pointer that reference forwards and backwards through the entire list.


```
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

```

### Why a Doubly Linked List?
By creating a tail pointer, we can now have 0(1) time complexity in order to add to the end of our list.

### Downsides of a Doubly Linked List
Our memory for each node has been increased by this additonal pointer that has been added.

Readability of code will be a little more complex, and we will have to update all of our functions for adding or removing nodes to now includes reference for our previous pointer as well.

<br/>

## Queues
A queue is an abstract data type (ADT) that returns values in the same order they are added. That means that, like the definition of a stack, the definition of a queue has nothing to do with its implementation. In this reading, you will learn how a queue works and examine the tradeoffs of two different implementations.

- FIFO (First In Last Out)
- Things that are removed from our queue will come off in the order that they were added. Much like standing in a line. The first person that gets to the movie theatre is the first person that gets in the movie.

### Removing && Adding to our Queue (Dequeue && Enqueue)

```
// You can create a Queue with an Array
class Queue {
  constructor() {
    this.data = [];
  }

//The process of adding something to our queue is known as enqueue
  enqueue(value) {
    this.data.push(value);
  }

//The process of removing something from our queue is known as dequeue
  dequeue() {
    return this.data.shift();
  }
}


// You can also create a queue with a Linked List
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

```

### Should I use a Linked List || an Array for my Queue
This really depends on how much data you are going to be working with, and where our part as an engineer will come into play.

We know by looking at the functionality of both of the above implementations that a Linked list would be faster.

But this is really only the case when we are working with large amounts of data.

So as engineers we will need to decide if writing harder to read and more complex code will be worth the trade off of running faster.

<br/>

### Solo Practice 30 Minutes
- [Linked List Part 1](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-10---data-structures/linked-list-practice-part-1)
    - Q&A
<br/>

### Solo Practice 30 mins
- [Linked List Part 2](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-10---data-structures/linked-list-practice-part-2)
    - Q&A
<br/>

### Solo Practice 30 mins
- [Linked List Part 3](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-10---data-structures/linked-list-practice-part-3)
    - Q&A

<br/>


# EOD
