let obj = { 1: 1 };
// let arr = [1, 2, 3];

// const set1 = new Set([1, 2, 3, 4, 5, 5, 5, obj, obj, arr, arr, [], []]);
const set2 = new Set("asdajhsdhjkasdkjhaskjdhas");

// console.log(set1);
// // console.log(set2);

// console.log(obj["1"]);
// console.log(arr[0]);
// console.log(set1.has(1000));
// console.log(set1);

// for (let ele of set1) {
//   console.log(ele);
// }

const arr = [1, 2, 3, 4];

console.log(arr.includes(1));

const set1 = new Set([1, 2, 3, 4]);

console.log(set1.has(1));

set1.add(5);
console.log(set1);

set1.delete(5);
console.log(set1);

console.log(set1.entries());

set1.clear();
console.log(set1);
