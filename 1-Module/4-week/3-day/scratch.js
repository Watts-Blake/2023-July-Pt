// let func = function (firstArg) {
//   return function (secondArg) {
//     console.log(firstArg(secondArg));
//   };
// };

// let triple = function (num) {
//   return num * 3;
// };

// // console.log(triple(func(9)));
// // console.log(func(triple(), 9));
// console.log(func(triple)(9));
// // console.log(func()(triple(9)));

let global = "global name space";

// let ourFunc = () => {
//   // console.log(global);
//   // let global = "our new global";
//   // console.log(global);
//   let funcVar = "function scope";
//   // console.log(funcVar);
//   for (let i = 0; i < 1; i++) {
//     // console.log(global);
//     // console.log(i);
//     let blockScope = "block scoped";
//     // console.log(funcVar);
//     // console.log(blockScope);
//     // global = "globax ashjbdjhasbjdhbasjhbd";
//     // console.log(global);
//   }
//   // console.log(blockScope);
//   // console.log(i);
// };
// console.log(funcVar);

// ourFunc();
// console.log(global);

// var ourFariable = "asjkdakjsdhkjahskjdhaskjhdk";
// let letVariable = 'asjhkdakjsdhjkahsjkdajhksd'
// const constVar = 'asjkdjkashdjhasjkd'

// for (let i = 0; i < 1; i++) {
//   let variable = "declared with let and is block scoped";
//   console.log(variable);
// }
// console.log(i);
// console.log(variable);

// for (let i = 0; i < 1; i++) {
//   const str = "declared with const, can not be reassing and is block scoped";
//   // str = {};
//   // console.log(str);
//   // notice that you still can mutate that data if it is able to be mutated
//   const arr = [1, 2, 3, 4];
//   arr[0] = "we mutated";
//   // arr = [1, 2, 3, 4];
//   console.log(arr);
// }
// console.log(i);
// console.log("these are block scoped so we do not have access", str);
// console.log("these are block scoped so we do not have access", arr);

// const ourFunc = () => {
//   console.log(
//     "the var key word will hoist its declaration to the top of your function, but your variable swill be undefined",
//     str,
//     arr
//   );
//   for (let i = 0; i < 10; i++) {
//     var str = "declared with var and is function scoped";
//     // with var you can reassing or mutate
//     string = "reassignment";
//     console.log(str);

//     var arr = [1, 2, 3, 4];
//     arr[0] = "we mutated";
//     console.log(arr);
//   }
//   console.log("var is function scoped so we do have access", str);
//   console.log("var is function scoped so we do have access", arr);
// };

// console.log(
//   "var is function scoped so we do not have access in our global",
//   str
// );
// console.log(
//   "var is function scoped so we do not have access in our global",
//   arr
// );
// ourFunc();

// const outerFunc = (arg) => {
//   let name = "Edward";

//   const logName = () => {
//     return "Hi my name " + name;
//   };

//   return logName();
// };

// let counter2 = 0;

// function incrementCounter2() {
//   counter2 += 1;
//   console.log(counter2);
// }

// incrementCounter2();
// incrementCounter2();

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log(counter()); // => 1
console.log(counter()); // => 2
// console.log(counter.count);
// we cannot reach the count variable!
// counter.count; // undefined
// let counter2 = createCounter();
// console.log(counter2()); // => 1
