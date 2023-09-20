let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((accum, el) => (accum += el));
console.log(sum, "O(1)");

let newArr = arr.reduce((accum, el) => {
  accum.push(el);
  return accum;
}, []);
console.log(newArr, "O(n)");
