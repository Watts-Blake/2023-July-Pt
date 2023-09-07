// const lambo = {
//   make: "lamborghini",
//   model: "aventador",
//   color: "black",
//   logInfo: () => console.log(`${lambo.make}, ${lambo.model}, ${lambo.color}`),
// };

// lambo.logInfo();

// const arr = [1, 2, 3, 4];
// console.log(typeof arr);

// class Car {}

// // console.log(Car);

// const lambo = new Car();

// console.log(lambo);
// class Car {
//   constructor(make, model, color) {
//     this.make = make;
//     this.model = model;
//     this.color = color;
//   }
// }

// // console.log(Car);

// const lambo = new Car("lambo", "aventador", "black");

// const ford = new Car("ford", "mustang", "silver");

// console.log(ford);
// console.log(lambo);

// const arr = [1, 2, 3, 4];
// console.log(ford instanceof Car);

// console.log(arr instanceof Array);

// class Car {
//   constructor(make, model, color) {
//     this.make = make;
//     this.model = model;
//     this.color = color;
//   }
//   logInfo() {
//     console.log(`${this.make}, ${this.model}, ${this.color}`);
//   }
// }

// const lambo = new Car("lambo", "aventador", "black");

// // console.log(lambo);
// const ford = new Car("ford", "mustang", "silver");
// // lambo.logInfo();
// ford.logInfo();

// class Car {
//   static allInstances = [];
//   constructor(make, model, color) {
//     this.make = make;
//     this.model = model;
//     this.color = color;
//     Car.allInstances.push(this);
//   }
//   logInfo() {
//     console.log(`${this.make}, ${this.model}, ${this.color}`);
//   }
//   static printAllInstances() {
//     for (let car of Car.allInstances) {
//       console.log(car);
//     }
//   }
// }

// const lambo = new Car("lambo", "aventador", "black");
// const ford = new Car("ford", "mustang", "silver");
// // console.log(Car);
// // lambo.logInfo();
// // ford.logInfo();

// Car.printAllInstances();

// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   speak() {
//     console.log(this.sound);
//   }

//   static pet(animal) {
//     console.log(`You attempt to pet ${animal.name}`);
//   }
// }

// class Dog extends Animal {
//   // constructor inherited from Animal so no need to define one here
// }

// const fluffy = new Dog("Fluffy", "woof");
// fluffy.speak(); // woof
// Dog.pet(fluffy); // You attempt to pet Fluffy

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }

  static pet(animal) {
    console.log(`You attempt to pet ${animal.name}`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "woof");
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name, "meow");
  }
}

const fluffy = new Dog("Fluffy");
const tommySocks = new Cat("Tommy");
// console.log(tommySocks);
// console.log(fluffy);
// fluffy.speak(); // woof
// Dog.pet(fluffy); // You attempt to pet Fluffy

// console.log(fluffy instanceof Cat);

module.exports = { Dog, Cat };
