// console.log("hello1");
// console.log("hello2");
// console.log("hello3");
// console.log("hello4");

// const myFunc = () => {
//   console.log(1);
//   my2ndFunc();
// };

// const my2ndFunc = () => {
//   console.log(2);
// };

// const callStack = [myFunc, my2ndFunc];

// callStack.push(hell01);
// callStack.pop();

setTimeout(function () {
  console.log("this didnt happen right away 0_o");
}, 1500);
setTimeout(function () {
  console.log("this didnt happen right away 0_o");
}, 1600);
setTimeout(function () {
  console.log("this didnt happen right away 0_o");
}, 1700);

const messageQueue = [];
