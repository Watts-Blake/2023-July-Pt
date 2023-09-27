// const hashMap = {};
// hashMap.firstName = 'Blake'

function hash(str) {
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}

const hashMap = Array(1);

// console.log(hash("firstName"));

hashMap[hash("firstName")] = "Blake";

console.log(hashMap[hash("firstName")]);

const personObj = {};
personObj.firstName = "Blake";
console.log(personObj.firstName);
