let average = function (num1, num2) {
  let avg = (num1 + num2) / 2;
  return avg;
};


// console.log(average(3, 7));

// arrow function equivelant
// let averageArrow = (num1, num2) => {
//   let avg = (num1 + num2) / 2;
//   return avg;
// };

// arrow function with implicit return
// let averageArrow = (num1, num2) => (num1 + num2) / 2;

// console.log(averageArrow(3, 7));

//keying into arr example
// let arr = [1, "string", {}, averageArrow];

// console.log(arr[0]);

// keying into objects examples
// let obj = {
//   name: "Edward",
//   lastName: "Felipe",
// };

// console.log(obj);

// console.log(obj);

// let person = {
//   firstName: "Blake",
//   lastName: "Watts",
//   dog: "paisley",
//   age: 28,
//   hobbies: ["coding", "hiking", "video games"],
// };


// console.log(person.hobbies.length);

// let arr = person.hobbies;

// console.log(arr);

// arr.push("watching anime");
// console.log(arr, person);

// let copy = person.hobbies.slice();

// copy.push("watching anime");

// console.log(copy, person);


// let person = {
//   firstName: "Blake",
//   lastName: "Watts",
//   dog: "paisley",
//   age: 28,
//   hobbies: ["coding", "hiking", "video games"],
// };


// // keying in with bracket notation
// // let namee = "firstName";
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[namee]);

let car = {};

let colorVar = "color";

// car.colorVar = "blue";

// car.color = "blue"; ✅

// car[colorVar] = "blue"; ✅

// car[0] = "blue";

// console.log(car);

// let cat = {};
// let myKey = "color";

// cat.myKey = "orange";

// console.log(cat.myKey);


// let person = {
//   firstName: "Blake",
//   lastName: "Watts",
//   dog: "paisley",
//   age: 28,
//   hobbies: ["coding", "hiking", "video games"],
// };

// for (let i = 0; i < person.length; i++) {
//   console.log("were running");
// }

// console.log(person.length);

// for (let key in person) {
//   console.log(key, person[key]);

// }

// let person = {
//   firstName: "Blake",
//   lastName: "Watts",
//   dog: "paisley",
//   age: 28,
//   hobbies: ["coding", "hiking", "video games"],
//   printName: (name) => console.log(name),
// };

// person.printName("edward");

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

let values = Object.values(person);

// console.log(values);

// for (let i = 0; i < values.length; i++) {
//   let value = values[i];
//   if (value === "Watts") {
//     return console.log("we got it", i);
//   }

// }

let person = {
  firstName: "Blake",
  lastName: "Watts",
  dog: "paisley",
  age: 28,
  hobbies: ["coding", "hiking", "video games"],
  printName: (name) => console.log(name),
};


let hobbies = ["coding", "hiking", "video games"];

for (let key in person) {
  console.log(key);
}

