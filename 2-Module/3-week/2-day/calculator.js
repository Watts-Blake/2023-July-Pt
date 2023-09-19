console.log(module.exports);

console.log(exports === module.exports);
exports.add = (num1, num2) => num1 + num2;
exports.subtract = (num1, num2) => num1 - num2;
console.log(module.exports);
