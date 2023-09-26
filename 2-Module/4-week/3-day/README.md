# M2Wk4D3 Data Structures Hashmaps

## [Learning Boost](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-10---data-structures/learning-boost---monday) 5 Min

<br/>


## Hash Functions
Hashing has many practical applications in computing. In addition to security and cryptographic applications, hash functions are key to efficient data indexing. There are many different types of hash functions but they all share some common traits. Understanding the properties of hash functions are crucial to web development and computer science.

A hash function takes in an input, runs it through a set of deterministic steps, and returns a scrambled output. Given the same input, it will ALWAYS return the same output.

Hashing, unlike encryption, only works in one direction. There is no way to "decrypt" a hash output to find the input. This is a critical component that makes hash functions particularly useful for security.

### Typical Hash Functions [Hash Functions](https://emn178.github.io/online-tools/sha256.html)

```
const sha256 = require('js-sha256');

sha256("Hello, world!");
// '315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3'

sha256("ABC");
// 'b5d4045c3f466fa91fe2cc6abe79232a1a57cdf104f7a26e716e0a1e2789df78'

sha256("ABCDEF");
// 'e9c0f8b575cbfcb42ab3b78ecc87efa3b011d9a5d10b09fa4e96f240bf6a82f5'

sha256("ABBEEF");
// 'cafd8090e01c3d9c886428dec6128a19416675d615a26211caf1c5721641bc1f'

sha256("Hello, world!");
// '315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3'
```


## Hashmaps || Hashtables
Now that we have learned about hash functions, lets learn about Hash tables/Hashmaps.

First you will notice that these names are gernerally interchangeable throughout the industry.

We have actually been using these for awhile but just havent talked about what is happening under the hood.

Everytime we have created a Pojo in javascript, we have used a hashtable.

POJO's in JS behind the scenes are actually using hash functions to create their key value pairs.

```
const hashtable = {};
hashtable["key"] = "value";
hashtable["key"];  // returns "value"
```

When creating Key Value pairs, we can think of our pojo as an array

```
const hashMap = []
```

Then we would need to use a hash function on a key that we are trying to create to get our hash

Next we will need to turn this hash into an an integer so that we can use it as an index in our array to assign a value.

```
function hash(str) {
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}

const hashMap = Array(1);

console.log(hash("firstName"));

function hashMod(key) {
  return hash(key) % hashMap.length;
}

console.log(hashMod("firstName"));

hashMap[hashMod("firstName")] = "Blake";

console.log(hashMap);
console.log(hashMap[hashMod("firstName")]);

let hashMapObj = {}
hashMap.firstName = 'Blake'
console.log(hashMapObj['firstName'])
```


### Hash Collisions
In our hashtables, each key that has been hashed is referred to as a bucket.

This bucket will hold a value.

A collision would be if we had two hashed keys have the same index, so the one that was assigned later would overwrite our previous bucket even if it was assigned with a different key.

```
function hash(str) {
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}

const hashMap = Array(1);

function hashMod(key) {
  return hash(key) % hashMap.length;
}

hashMap[hashMod("firstName")] = "Blake";
// hashMap.length++
hashMap[hashMod("lastName")] = "Watts";

console.log(hashMap[hashMod("firstName")]);
console.log(hashMap[hashMod("lastName")]);
```

### Solo Practice 30 Minutes
- [Hash Table Part 1](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-10---data-structures/hash-table-practice-part-1)
    - Q&A
<br/>

### Solo Practice 30 Minutes
- [Hash Table Part 2](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-10---data-structures/hash-table-practice-part-2)
    - Q&A
<br/>

### Solo Practice 30 Minutes
- [Hash Table Part 3](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-10---data-structures/hash-table-practice-part-3)
    - Q&A
<br/>

### Solo Practice 30 Minutes
- [Hash Table Part 4](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-10---data-structures/hash-table-practice-part-4)
    - Q&A
<br/>

## [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-10---data-structures/formative-quiz---wednesday--repeat-)

# EOD
