# M1Wk2D4 Intermediate Functions
<br/>

## Learning Boost 5 Min
<br/>

## Determining Data Types
Sometimes you want to know the type of value stored in a variable so that you can safely do things with it. If your function expects an array in its parameter but gets a number, you can't call the map method on that!

### Type Of [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
```
console.log(typeof 42);
// Expected output: "number"

console.log(typeof 'blubber');
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

console.log(typeof undeclaredVariable);
```

### Determining Array's with Array.isArray() [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- You will notice that using typeOf on an array will return a string response of "object"
- This is mainly because an array is an object in javascript, but we will cover that at a later point in our curriculum.
```
let a = [1, 2, 3];
console.log(typeof a);  // 'object'
```
- Instead we can you the Array Contructor to check instead
```
let a = [1, 2, 3];
Array.isArray(a);  // true

let n = 6.28;
Array.isArray(n);  // false

let f = function () {}
Array.isArray(f);  // false
```

### Real Use Case
```
function reverseTheSentence(sentence) {
  if (typeof sentence !== 'string') {
    // Tell the developer they are using
    // the function wrong.
    console.log("this function only accepts a string argument")
    return null
  };

};
console.log(reverseTheSentence(6))
```

<br/>

## Null And Undefined Types [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)
This is a harder subject to tackle because it's a philosophical subject. Many people ask, "What does the value of null mean in a program?" There are a couple of answers that programmers give to this. None of them are wrong. None of them are right. They just are. In the presence of null, the code you write determines which of the following meanings null has.

- The value null means the absence of a value or no value
- The value null means an unknown value
- The value null is a nuisance and I hate it and wish it were never invented

```
function reverseTheSentence(sentence) {
  if (typeof sentence !== 'string') {
    return null;
  }
  let parts = sentence.split(' ');
  parts.reverse();
  return parts.join(' ');
}
console.log(reverseTheSentence(6))
console.log(reverseTheSentence("sentence our reversed we"))
```
### Checking Null
A lot like an array, if we were to use the typeOf method on it, we will receive and string of object back. Once again this is because it technically is an object, but we will cover this later down the road

```
console.log(typeof null);  // 'object'
```
In order to check if something has the value of null, we will simply compare it with a ===

```
let a = [];
let x = null;

if (a === null) {
  console.log('a is null');
} else if (x === null) {
  console.log('x is null');
}
```
<br/>

## Undefined [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
- Undefined is a property that is set to any variable, funcyion, or object that has not been assigned, and will not change until we have assigned a different value.
- This differs from null because null is something that we need to set as a value to any variable, function or object.

```
let value;
console.log(value); // <- what does this print?

value = 6.28;
console.log(value);

let myFunc = function() {


};

console.log(myFunc())

let mySecondFunc = function(){
    return "We assigned a Value"
}
console.log(mySecondFunc())
```

### Checking Undefined
```
// Test if a value is undefined
if (value === undefined) {
  // do a thing
}

// You can also do it this way, but
// it is considered passé.
if (typeof value === 'undefined') {
  // do a thing
}
```

<br/>

# Short Practices 25 mins
- [Rotate](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/rotate)
- [Addition Mutator](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/addition-mutator)
- [Alternating Words](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/alternating-words)
    - Short Practice Q&A 15 min

<br/>


# Short Practices 50 mins
- [Repeating Translate](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/repeating-translate)
- [Max in Matrix](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/max-in-matrix)
- [Max in Columns](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/max-in-columns)
    - Short Practice Q&A 15 min

<br/>


# Short Practices Until EOD
- [Yeller](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/yeller)
- [Choosey Endings](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/choosey-endings)
- [Common Factors](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/common-factors)
- [Has Double Letter](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/has-double-letter)
    - Short Practice Q&A 15 min
<br/>

## Start on Hmwk Until EOD!!!!


# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/formative-quiz--repeat----thursday) - 10 minutes

# EOD
