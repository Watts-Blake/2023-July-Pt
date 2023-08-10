// let person = {
//   firstName: "Blake",
//   lastName: "Watts",
//   dog: "paisley",
//   age: 28,
//   hobbies: ["coding", "hiking", "video games"],
// };

// console.log("firstName" in person);
// console.log("address" in person);
// console.log(person.address);

// if (!person.address) {
//   console.log("hey are falsey value worked");
// }
let person = {
  firstName: "Blake",
  lastName: "Watts",
  dog: "paisley",
  age: 28,
  hobbies: ["coding", "hiking", "video games"],
};

// console.log(Object.values(person).includes("Blake"));
// console.log(Object.values(person).includes("Edward"));

const objValInclude = (obj, value) => {
  for (let key in obj) {
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
};

console.log(objValInclude(person, "Blake"));
console.log(objValInclude(person, "Edward"));
