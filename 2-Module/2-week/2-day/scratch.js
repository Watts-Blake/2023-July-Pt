// class Task {
//   static taskList = [];

//   static printTaskList() {
//     console.log(this.taskList);
//   }

//   static addTask(task) {
//     this.taskList.push(task);
//   }

//   constructor(taskDetail) {
//     this.taskDetail = taskDetail;
//     Task.addTask(this);
//   }
// }

// const laundry = new Task("laundry");
// console.log(Task.taskList);

// class Cat {
//   constructor(name, toys) {
//     this.name = name;
//     this.toys = toys;
//   }
//   purr() {
//     console.log(`${this.name} goes meow`);
//   }

//   purrMore() {
//     this.purr();
//   }
// }

// let cat = new Cat("tommySocks", [
//   "laser pointer",
//   "flopping fish",
//   "anything on the edge of a counter",
// ]);

// global.setTimeout(cat.purrMore, 5000);

// const unboundPurrMore = cat.purrMore;
// const boundPurrMore = unboundPurrMore.bind(cat);
// // global.setTimeout(boundPurrMore, 5000);
// // const boundPurr = () => cat.purrMore.apply(cat);
// // global.setTimeout(() => cat.purrMore.apply(cat), 2000);
// global.setTimeout(() => cat.purrMore.call(cat), 2000);

class Cat {
  constructor(name, toys) {
    this.name = name;
    this.toys = toys;
  }
  purr() {
    console.log(`${this.name} goes meow`);
  }

  purrMore() {
    this.purr();
  }
}

let cat = new Cat("tommySocks", [
  "laser pointer",
  "flopping fish",
  "anything on the edge of a counter",
]);

class Dog {
  constructor(name, toys) {
    this.name = name;
    this.toys = toys;
  }

  static logToys(toys) {
    console.log(`These are ${this.name}'s favorite toys`);
    for (let toy of toys) {
      console.log(toy);
    }
  }
}

const paisley = new Dog("Paisley", [
  "sriracha bottle",
  "burrito",
  "creepy lamb thing",
]);

// Dog.logToys.apply(paisley, [paisley.toys]);
// Dog.logToys.call(paisley, paisley.toys);

// Dog.logToys.apply(cat, [cat.toys]);

// cat.purr.apply(paisley);

// function broken() {
//   // Uncaught SyntaxError: Unexpected identifier
//   console.log("I'm broke");
// }

// function broken() {
//   // Uncaught SyntaxError: Unexpected identifier
//   console.log("I'm broke");
// } // Uncaught SyntaxError: Unexpected token '}'
// function callPuppy() {
//   const puppy = "puppy";
//   console.log(puppy);
// }

// callPuppy();

let str = "ashgdhjagsjdhgajshd";

let arr = [1, 2, 3, 4];

arr.push(5);
// str.push("ashgdjhasgd");

const ourError = new Error("This is our error");

const ourRefErro = new ReferenceError("This our reference error");

console.log(ourRefErro);
// try {
//   throw ourRefErro;
//   console.log();
// } catch (error) {
//   //   console.log(error);
//   console.error(error);
// } finally {
//   console.log("test");
// }

function callRecursion(arg) {
  callRecursion();
  console.log("after our recursive call");
}

try {
  callRecursion();
  console.log("after our function invocation");
} catch (error) {
  console.error(error);
} finally {
  console.log("were done and our program is running");
}

console.log("completed");
