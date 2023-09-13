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
// console.log(laundry.taskList);
// console.log(Task.taskList);

// class Dog {
//     constructor(name) {
//         this.name = name
//     }
// }

// const paisley = new Dog()

// class Cat {
//   constructor(name, toys) {
//     this.name = name;
//     this.toys = toys;
//   }
//   purr() {
//     console.log(`${this.name} goes meow`);
//   }

//   purrMore() {
//     console.log(this);
//     this.purr();
//   }
// }
// let cat = new Cat("tommySocks", [
//   "laser pointer",
//   "flopping fish",
//   "anything on the edge of a counter",
// ]);

// const unboundPurr = cat.purrMore;
// const boundPurr = unboundPurr.bind(cat);

// global.setTimeout(boundPurr, 2000);

// global.setTimeout(() => cat.purrMore.call(cat), 2000);
// global.setTimeout(() => cat.purrMore.apply(cat), 2000);
// global.setTimeout(() => cat.purrMore(), 2000);

class Cat {
  constructor(name, toys) {
    this.name = name;
    this.toys = toys;
  }
  purr() {
    console.log(`${this.name} goes meow`);
  }

  purrMore() {
    console.log(this);
    this.purr();
  }
}

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

let cat = new Cat("tommySocks", [
  "laser pointer",
  "flopping fish",
  "anything on the edge of a counter",
]);

// Dog.logToys(paisley.toys);
// Dog.logToys.call(paisley, paisley.toys);
// Dog.logToys.apply(paisley, [paisley.toys]);
// // Dog.logToys.call(cat, cat.toys);
// Dog.logToys.apply(cat, [cat.toys]);

// const str = "ima string";

// str.push("121312312321");

// console.log("i am runnig ");

const ourError = new Error("im a young error");

const ourTypeError = new TypeError("im a young type error");

// console.log(ourError);

// try {
//   throw ourError;
// } catch (err) {
//   console.log(err.message);
// } finally {
//   console.log("im a running after the log of our error");
// }

const ourRecurse = () => {
  ourRecurse();
};

try {
  ourRecurse();
} catch (err) {
  console.log(err.message);
}
// try {
//   module.exports = ourFunc;
// } catch (err) {
//   console.log(err.message);
// }

console.log("were continuning to run");
