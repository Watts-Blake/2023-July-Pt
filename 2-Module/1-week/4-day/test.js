// import needs to match the export
// if curlies are used on the export you need to use them on the import
const { Dog, Cat } = require("./scratch.js");

const jerry = new Cat("jerry");
const paisley = new Dog("paisley");
console.log(paisley);
console.log(jerry);
