// const lambo = {
//   make: "lambo",
//   model: "aventador",
//   color: "black",
//   logInfo: () => console.log(`${lambo.make}, ${lambo.model}, ${lambo.color}`),
// };
// // console.log(lambo);
// lambo.logInfo();

// const ford = {};

// class Car {}
// console.log(Car);

// const lambo = new Car();

// console.log(lambo);

// lambo.make = "lambo";

// console.log(lambo);

// class Car {
//   constructor(make, model, color) {
//     console.log(this);
//     this.make = make;
//     console.log(this);
//     this.model = model;
//     console.log(this);
//     this.color = color;
//     console.log(this);
//   }
// }

// const lambo = new Car("lambo", "aventador", "black");
// const ford = new Car("ford", "mustang", "silver");
// console.log(ford);

// console.log(lambo);

// lambo.make = "lambo";

// const arr = [1, 2, 3, 4];

// console.log(arr instanceof Array);
// console.log(arr instanceof Car);
// console.log(lambo instanceof Car);
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
// const ford = new Car("ford", "mustang", "silver");
// // lambo.logInfo();
// // ford.logInfo();

// console.log(Car);
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

//   static logAllInstances() {
//     for (let car of Car.allInstances) {
//       console.log(`${car.make}, ${car.model}, ${car.color}`);
//     }
//   }

//   static findCar(carModel) {
//     const car = Car.allInstances.find((car) => car.model === carModel);
//     return car;
//   }
// }
// const lambo = new Car("lambo", "aventador", "black");
// const ford = new Car("ford", "mustang", "silver");

// lambo.logInfo();
// ford.logInfo();

// console.log(Car);
// console.log(Car.findCar("mustang"));

// Car.logAllInstances();

// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }
//   speak() {
//     console.log(this.sound);
//   }
// }

// class Dog extends Animal {}

// const paisley = new Dog("paisley", "woof woof gurrrrr im dawg");

// class Cat extends Animal {}

// const tommySocks = new Cat("tommy", "pur pur");
// // console.log(paisley);
// // console.log(paisley instanceof Dog);
// // console.log(paisley instanceof Animal);
// // console.log(tommySocks instanceof Animal);
// // console.log(tommySocks instanceof Cat);
// // console.log(tommySocks instanceof Dog);

// tommySocks.speak();
// paisley.speak();

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
    this.sound = "woof";
  }
  fetchABone() {
    console.log(`${this.name} fetches a bone`);
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
    this.sound = "purrrrRRRRrrrRRRRR";
  }
}

const paisley = new Dog("paisley", "ahasbkjhdbhjasbdjhbasjhd");

paisley.fetchABone();

const tommy = new Cat("tommy", "purrr");

// tommy.fetchABone();

console.log(paisley, "from scratch line 62");
module.exports = { Dog, Animal, Cat };
