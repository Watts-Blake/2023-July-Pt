let person = {
  firstName: "Blake",
  lastName: "Watts",
  dog: "paisley",
  age: 28,
  hobbies: ["coding", "hiking", "video games"],
};

console.log(person.address);

if (!person.address) {
  console.log("hey this key didnt exist our obj");
}

// console.log("address" in person);

// console.log("firstName" in person);

// let values = Object.values(person);
// console.log(values.includes("Edward"));

// const objValsIncludes = (obj, value) => {
//   for (let key in obj) {
//     if (obj[key] === value) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(objValsIncludes(person, "Blake"));
