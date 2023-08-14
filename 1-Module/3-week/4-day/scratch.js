// console.log("hello");

// function adder(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// adder will assign the first two parameters to the passed in arguments
// and ignore the rest

// let adder = (...nums) => {
//   //   console.log(nums);
//   let sum = 0;
//   for (let num of nums) {
//     sum += num;
//   }
//   return sum;
// };

// console.log(adder(2, 3, 4, 6, 6, 10, 300)); // => 5
// console.log(adder(1, 5, 19, 100, 13)); // => 6

// let person = {
//   firstName: "Blake",
//   lastName: "Watts",
//   dog: "paisley",
//   age: 28,
//   hobbies: ["coding", "hiking", "video games"],
// };

// let newPerson = { ...person };

// newPerson.firstName = "Edward";

// let catObj = {
//   name: "Whiskeys",
//   color: "Black",
// };
// console.log(person, newPerson);
// let combinedObj = { ...person, ...catObj };
// console.log(combinedObj);
// let arr = [1, 2, 3, 4];

// let copy = [...arr];

// copy[0] = "we mutated";
// console.log(arr, copy);

// let combinedArr = [...arr, ...copy];

// console.log(combinedArr);
// function speak(verb, noun, ...otherThings) {
//   console.log(otherThings);
//   return "I like to go " + verb + " with " + noun + ".";
// }

// const words = ["running", "Jet", "hello", "hi", "goodbye"];

// console.log(...words, "line59");
// // console.log(speak("running", "Jet")); // => I like to go running with Jet.
// console.log(speak(...words)); // => I like to go running with Jet.

let numArray = [10, 20];

// let indexZero = numArray[0];
// let indexOne = numArray[1];

// let [indexZero, indexOne] = numArray;
// console.log(indexZero, indexOne);

// let num1 = 17;
// let num2 = 3;

// // this syntax will swap the values of the two variables
// [num1, num2] = [num2, num1];

// console.log(num1); // 3
// console.log(num2); // 17
// let person = {
//   firstName: "Blake",
//   lastName: "Watts",
//   dog: "paisley",
//   age: 28,
//   hobbies: ["coding", "hiking", "video games"],
// };

// let firstName = person.firstName;
// let lastName = person.lastName;

// let { firstName, lastName } = person;

// console.log(firstName, lastName);
let person = {
  firstName: "Blake",
  lastName: "Watts",
  dog: "paisley",
  age: 28,
  hobbies: ["coding", "hiking", "video games"],
};

let { firstName, lastName, ...obj } = person;

console.log(firstName, lastName, obj);
