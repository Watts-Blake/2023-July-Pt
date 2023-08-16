// global scoped variables
let global1 = "global scoped variable without a keyword";
// const global2 = 'global variable'

// let ourFunc = () => {
//   // console.log(global1, "from our function");
//   let funcVar = "function scoped variable";
//   // console.log(funcVar, "from func scope");
//   for (let i = 0; i < 2; i++) {
//     // console.log(global1, "from our code block");
//     // console.log(funcVar, "from block scope");
//     console.log(i, "from inside our block scope");
//   }
//   // console.log(i, "inside of func scope");
// };

// console.log(i, "from global name space");
// console.log(global1, "from globale name space");
// console.log(funcVar);
// ourFunc();

// for (let i = 0; i < 10; i++) {
//   let variable = "declared with let and is block scoped";
//   console.log(variable);
// }
// console.log(i);
// console.log(variable);

// for (let i = 0; i < 1; i++) {
//   const str = "declared with const, can not be reassigned and is block scoped";
//   // str = "reassignment";
//   // console.log(str);
//   // // notice that you still can mutate that data if it is able to be mutated
//   const arr = [1, 2, 3, 4];
//   arr[0] = "we mutated";
//   // arr = {};
//   console.log(arr);
// }
// const arr = ["different", 2, 3, 4];
// console.log(arr);
// console.log(i);
// console.log("these are block scoped so we do not have access", str);
// console.log("these are block scoped so we do not have access", arr);

const ourFunc = () => {
  console.log(
    "the var key word will hoist its declaration to the top of your function, but your variable swill be undefined",
    str,
    arr
  );
  for (let i = 0; i < 10; i++) {
    var str = "declared with";
    string = "reassignment";
    // console.log(str);
    // notice that you still can mutate that data if it is able to be mutated
    var arr = [1, 2, 3, 4];
    arr[0] = "we mutated";
    // console.log(arr);
  }
  // console.log("var is function scoped so we do have access", str);
  // console.log("var is function scoped so we do have access", arr);
};

// console.log(
//   "var is function scoped so we do not have access in our global",
//   str
// );
// console.log(
//   "var is function scoped so we do not have access in our global",
//   arr
// );
ourFunc();
