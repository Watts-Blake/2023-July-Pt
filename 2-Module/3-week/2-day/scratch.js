// const { add, subtract } = require("./calculator");

// console.log(add(1, 2));
// console.log(subtract(2, 1));

function addTwoNums(num1, num2) {
  let total = 0;

  for (let i = 0; i < num1; i++) {
    total += 1;
  }

  for (let i = 0; i < num2; i++) {
    total += 1;
  }

  return total;
  //   return num1 + num2;
}

console.time();
// const startTime = Date.now();
// const startTime = performance.now();
addTwoNums(100, 1000);
console.timeEnd();
// const endTime = Date.now();
// const endTime = performance.now();
// console.log(endTime - startTime);

// function addNums(n) {
//   let total = 0;

//   for (let i = 1; i <= n; i++) {
//     console.log(i, total);
//     total += i;
//   }

//   return total;
// }

// addNums(10);

// function addNums(n) {
//   total = 0;

//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//     total += i;
//   }

//   return total;
// }

// function addManyNums(n) {
//   let total = 0;

//   for (let i = 0; i < n; i++) {
//     total += addNums(i);
//   }

//   return total;
// }

// addManyNums(10);

// function printNumbersTwice(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }

//   for (let j = 0; j < n; j++) {
//     console.log(j);
//   }
// }

// O(N)
// printNumbersTwice(5);

// let arr = [1, 2, 3 ,4 ]

// for (let num of arr) {

// }

// let obj = {person: 'Edward', pet : 'cat'}

// for (let key of obj) {

// }

// function getNumList(n) {
//   let nums = [];

//   for (let i = 0; i < n; i++) {
//     nums.push(i);
//   }

//   return nums;
// }

// console.log(getNumList(5).length);

// function getNumPairsList(n) {
//   let pairs = [];

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       pairs.push([i, j]);
//     }
//   }

//   return pairs;
// }
