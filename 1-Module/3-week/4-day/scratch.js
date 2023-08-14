
// let array1 = [1, 2, 3];

// let array2 = array1;

// array2.push(4);

// console.log(array1); // => ????

// ///
// let num1 = 7;

// let num2 = num1;

// num1 += 10;

// console.log(num2); // => ????

// function adder(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// adder will assign the first two parameters to the passed in arguments
// and ignore the rest

// console.log(adder(2, 3, 4)); // => 5
// console.log(adder(1, 5, 19, 100, 13)); // => 6

// function adder(...nums) {
//   let sum = 0;
//   //   console.log(nums, "line 29");
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum;
//   //   return sum;
// }
// console.log(adder(1, 5, 19, 100, 13, 12)); // => 6


// let person = {
//   firstName: "Blake",
//   lastName: "Watts",
//   dog: "paisley",
//   age: 28,
//   hobbies: ["coding", "hiking", "video games"],
// };

// let newPerson = { ...person };

// newPerson.firstName = "Edward";

// newPerson.lastName = "Felipe";

// let cat = {
//   catName: "Whiskers",
//   color: "black",
// };

// let combinedPerson = { ...person, ...cat };

// console.log(combinedPerson);

let arr = [1, 2, 3, 4];

let copy = [...arr];

copy[0] = "we mutated";

// console.log(copy, arr);

let newArr = [...arr, ...copy];

// console.log(newArr);
function speak(verb, noun, ...everythingElse) {
  console.log(verb, noun, everythingElse);
  return "I like to go " + verb + " with " + noun + ".";
}

const words = ["running", "Jet"];
let things = [1, 2, 3, 4, 5];
// console.log(speak("running", "Jet")); // => I like to go running with Jet.
// console.log(speak(...words, ...things)); // => I like to go running with Jet.


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

