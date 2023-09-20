/// Ob101010

//^0 * 0 = 0
//2^1 * 1 = 2*1 = 2
//2^2 * 0 = 4 * 0 = 0
//2^3 * 1 = 8 * 1 = 8
//2^4 * 0 = 16 * 0 = 0
//2^5 * 1 = 32 * 1 = 32

// 100

// 100 / 2 = 50 r 0
// 50 / 2  = 25 r 0
// 25 / 2 = 12 r 1
// 12 / 2 = 6 r 0
// 6 / 2 = 3 r 0
// 3 / 2 = 1 r 1
// 1 /2 = 0 r 1

//0b1100100

// 0b0011;
//16 ^ 1 * 1 = 1
// 16 ^ 1 * 1 = 16

// const decimal = parseInt("a1", 16); // 161
// const decimal = parseInt("a011", 16); // 161

// const decimal = parseInt("1100100", 2);
// console.log(decimal);

// const hex = decimal.toString(16);
// console.log(hex);

const decimal = parseInt("a1", 16); // 161
console.log(decimal);
const hexadecimal = decimal.toString(16); // 'a1'
console.log(hexadecimal);
const binary = Number(decimal.toString(2)); // '10100001'
console.log(binary);
