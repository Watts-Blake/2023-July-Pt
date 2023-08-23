let firstName = "Blake";
let lastName = "Watts";
let age = 28;

// console.log("My name is" + " " + firstName + " " + lastName);

// let newStr = `My name is ${firstName} ${lastName} and i am ${age} years old`;

// console.log(newStr);
// let newStr = `My name is ${firstName.toLowerCase()} ${lastName.toUpperCase()} and i am ${
//   age - 5
// } years old`;

// let newStr = `${[1, 2, 3, 4, 5]}`;
// let newStr = `${{ firstName: "Blake" }}`;

// console.log(newStr);

// const upperWord = (word) => word.toUpperCase();
// const lowerWord = (word) => word.toLowerCase();

// let newStr = `${upperWord(firstName)} ${lowerWord(lastName)}`;

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

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// const recurse = (x) => {
//   console.log(x);
//   // base case x == 0
//   // recursive case x > 0
//   if (x > 0) {
//     // recursive step decrementing x
//     x--;
//     recurse(x);
//   }
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
