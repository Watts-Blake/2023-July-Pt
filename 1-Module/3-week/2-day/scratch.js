let average = function (num1, num2) {
  let avg = (num1 + num2) / 2;
  return avg;
};

// console.log(average(5, 10));

// more than one line, curlies are needed
let averageArrow = (num1, num2) => {
  let avg = (num1 + num2) / 2;
  return avg;
};

// console.log(averageArrow(5, 10));

// implicit return, no curlies needed
let logName = (name) => name;

// console.log(logName("Edward"));

// indexing into an array
let arr = [1, 2, 3, 4];
// console.log(arr[0]);

// let obj = { key: "value" };
// // keying into an object
// console.log(obj.key);

// let person = {
//   firstName: "Blake",
//   lastName: "Watts",
//   dog: "paisley",
//   age: 28,
//   hobbies: ["coding", "hiking", "video games"],
// };

// console.log(person.firstName, person.lastName);

// console.log(person.address);
// person.address = "test123";
// console.log(person.hobbies[0].toUpperCase());

// console.log(person);
// person.firstName = "Edward";
// console.log(person);

// console.log(person.hobbies);
// person.hobbies.push("watching anime");
// console.log(person, person.hobbies);

// assigning a array that is located inside of an object to a variable
// will mutate the objects array and the variables array
// let hobbies = person.hobbies;

// to avoid this make a copy of this array using slice
// let hobbies = person.hobbies.slice();

// hobbies.push("watching anime");
// // console.log(hobbies);

// console.log(person.hobbies);

// let person = {
//   firstName: "Blake",
//   lastName: "Watts",
//   dog: "paisley",
//   age: 28,
//   hobbies: ["coding", "hiking", "video games"],
// };

// let address = "address";
// bracket notation looks for the variable
// person[address] = "test123";

// dot notation doesnt care about the variable and will use whatever letter that come
// after the period to assign/reassign
// person.address = "test123"
// console.log(person.address);
// let cat = {};
// let myKey = "color";

// cat.myKey = "orange";
// console.log(cat.color);

// let lion = { name: "Simba" };

// console.log(lion["color"] === undefined); // => ???

// let person = {
//   firstName: "Blake",
//   lastName: "Watts",
//   dog: "paisley",
//   age: 28,
//   hobbies: ["coding", "hiking", "video games"],
// };

// // cant use normal for loop
// for (let i = 0; i < person.length; i++) {
//   console.log(person.firstName);
// }

//
// console.log(person.length);

// for (let key in person) {
//   console.log(key, person[key]);
//   console.log(key, person.key);
// }

let person = {
  firstName: "Blake",
  lastName: "Watts",
  dog: "paisley",
  age: 28,
  hobbies: ["coding", "hiking", "video games"],
  printName: (name) => console.log(name),
};

// let printName = (name) => console.log(name);
// person.printName("Blake");

// console.log(person.keys());
// console.log(Object.keys(person));

// console.log(Object.values(person));

// let personVals = Object.values(person);

// console.log(personVals);

// console.log(Object.entries(person));

delete person.hobbies;

console.log(person);
