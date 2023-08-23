let firstName = "Blake";
let lastName = "Watts";
let age = 28;

// let greeting =
//   "Hello my name is " +
//   firstName + " " +
//   lastName +
//   " and I am" +
//   age +
//   " years old blaw blaw blaw";

// console.log(greeting);
// let newStr = `Hello my Name is ${firstName} ${lastName} and I am ${age} years old`;

// console.log(newStr);
// let newStr = `Hello my Name is ${firstName.toLowerCase()} ${lastName.toUpperCase()} and I am ${
//   age - 5
// } years old`;

// console.log(newStr);

// const upperWord = (word) => word.toUpperCase();
// const lowerWord = (word) => word.toLowerCase();

// let newStr = `Hello my Name is ${upperWord(firstName)} ${lowerWord(
//   lastName
// )} and I am ${age - 5} years old`;

// console.log(newStr);

// let person = { firstName: "Edward" };

// let newStr = ` ${[1, 2, 3, 4]} ${person.firstName}`;
// console.log(newStr);

// function foo() {
//   console.log("a", ": foo has been added to the call stack");
//   bar();
//   console.log(
//     "e",
//     ": foo will finish executing then be removed from the call stack"
//   );
// }
// function bar() {
//   console.log("b", ": bar has been added to the call stack");
//   baz();
//   console.log(
//     "d",
//     ": bar will finish executing then be removed from the call stack"
//   );
// }
// function baz() {
//   console.log(
//     "c",
//     ": baz has been added to the call stack, will finish executing then be removed"
//   );
// }
// foo();
// console.log("f", ": everything on the call stack has finished executing");

// const recurse = (x) => {
//   console.log(x);
//   // base case if x === 0 stop recursion
//   if (x === 0) return;
//   // recursive case x > 0
//   recurse(x - 1);
//   //   if (x > 0) {
//   //     //recursive step decrement x somehow
//   //     // let newX = x - 1;
//   //     recurse(x - 1);
//   //   }
// };
// recurse(10);
const recurse = (x) => {
  console.log(
    x,
    ": function call starting to execute, added to the call stack"
  );
  // base case x === 0
  // recursive case x > 0
  if (x > 0) {
    // recursive step == calling function with x -1
    recurse(x - 1);
  }
  console.log(
    x,
    ": function call about to finish execution, will be removed from the call stack"
  );
};
recurse(2);
