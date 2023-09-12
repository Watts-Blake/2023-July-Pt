// class Animal {
//     constructor(name, sound) {
//         this.name = name;
//         this.sound = sound
//     }
// }

// const newAnimal = new Animal('paisley', 'wwof woof gurr')
// const test = {
//   prop: 42,
//   func: function () {
//     return this;
//   },
// };

// console.log(test.func());

class Dog {
  constructor(name) {
    this.name = name;
  }

  changeName() {
    console.log("line 24", this);
    this.name = "Layla";
  }
}

let dog = new Dog("Bowser");

// dog.changeName();

// let change = () => dog.changeName();
// console.log(change());

// console.log(dog);

class Cat {
  purr() {
    console.log("meow");
  }

  purrMore() {
    console.log("line 44", this);
    this.purr();
  }
}
let cat = new Cat();

// global.setTimeout(cat.purrMore, 5000);
// global.setTimeout(() => cat.purrMore(), 3000);

// const unboundPurrMore = cat.purrMore;
// const boundPurrMore = unboundPurrMore.bind(cat);

// globalThis.setTimeout(boundPurrMore, 3000);
// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }

// function printName() {
//   console.log("line 64", this.firstName);
// }

// const adrian = new Person("Adrian");

// printName();

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }

//   printName() {
//     console.log("line 77", this.firstName, this);
//   }
// }

// const brian = new Person("Brian");
// brian.printName();

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//     console.log("line 88", this);
//   }

//   printName() {
//     console.log(this.firstName);
//   }
// }

// const johnny = new Person("Johnny");
// function hello(name) {
//   this.name = name;
//   console.log(this);
// }

// const greeting = new hello("edward");

class Person {
  constructor(firstName) {
    this.firstName = firstName;
    // ?
  }

  printName() {
    console.log(this === johnny);
  }
}

const johnny = new Person("Johnny");

johnny.printName();
