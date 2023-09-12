# M2Wk2D1 Context TDD

## [Learning Boost](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/learning-boost---tuesday) 5 Min

<br/>

## Context [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
Context refers to the value of the this keyword when code is executed.


### bind() [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.

### Call [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
The call() method of Function instances calls this function with a given this value and arguments provided individually.

### Apply [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).


```
class Cat {
  constructor(name, toys) {
    this.name = name;
    this.toys = toys;
  }
  purr() {
    console.log(`${this.name} goes meow`);
  }

  purrMore() {
    this.purr();
  }
}
let cat = new Cat("tommySocks", [
  "laser pointer",
  "flopping fish",
  "anything on the edge of a counter",
]);
global.setTimeout(cat.purrMore, 5000);

// // solving with arrow syntax
// // this only works because weve decided to invoke the function which brings the context at that time with it
global.setTimeout(() => cat.purrMore(), 5000);

// //solving with bind
const unboundPurrMore = cat.purrMore;
const boundPurrMore = unboundPurrMore.bind(cat);
global.setTimeout(boundPurrMore, 5000);

// // solving with call

// // call will actually invoke the method so we have to use an arrow to make a callback
global.setTimeout(() => cat.purrMore.call(cat), 5000);
cat.purrMore.call(cat);

// // solving with apply

// // apply will actually invoke the method so we have to use an arrow to make a callback
global.setTimeout(() => cat.purrMore.apply(cat), 5000);
cat.purrMore.apply(cat);

class Dog {
  constructor(name, toys) {
    this.name = name;
    this.toys = toys;
  }

  static logToys(toys) {
    console.log(`These are ${this.name}'s favorite toys`);
    for (let toy of toys) {
      console.log(toy);
    }
  }
}

const paisley = new Dog("Paisley", [
  "sriracha bottle",
  "burrito",
  "creepy lamb thing",
]);

cat.purrMore.call(paisley);

const paisleyMeows = cat.purr.bind(paisley);
paisleyMeows();
cat.purr.apply(paisley);
cat.purr.call(paisley);

Dog.logToys.apply(paisley, paisley.toys);
Dog.logToys.call(paisley, paisley.toys);

console.log(cat.toys);

Dog.logToys.apply(cat, [paisley.toys]);
Dog.logToys.call(cat, paisley.toys);
```

<br/>

## 30 minutes to finish yesterdays Paired Practice
[Context Project](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/context-project--phase-1-3)
- if you finished it yesterday than start reading through the homework for wednesday.


<br/>

## JS Error Types [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.


### SyntaxError [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
A SyntaxError is thrown when the JavaScript engine attempts to parse code that does not conform to the syntax of the JavaScript language. When learning the JavaScript language this error is a constant companion for any missing \} or misspelled function keywords.

```
funtion broken () { // Uncaught SyntaxError: Unexpected identifier
  console.log("I'm broke");
}

function broken () { // Uncaught SyntaxError: Unexpected identifier
  console.log("I'm broke");
}} // Uncaught SyntaxError: Unexpected token '}'

```

### ReferenceError [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
"The ReferenceError object represents an error when a non-existent variable is referenced." This is the error that you'll encounter when attempting to reference a variable that does not exist (either within your current scope or at all).

```
function callPuppy() {
  const puppy = "puppy";
  console.log(pupy);
}

callPuppy(); // ReferenceError: pupy is not defined

function callPuppy() {
  const puppy = "puppy";
}

console.log(puppy); // ReferenceError: puppy is not defined

```

### TypeError [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.

```
let dog; // Remember unassigned variables are undefined!

dog(); // TypeError: dog is not a function

const puppy = "puppy";

puppy = "apple"; // TypeError: Assignment to constant variable.

```

<br/>

## Creating, Throwing && Catching your own errors.

### Error Contructor [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)
The Error() constructor creates Error objects.

```
const first = Error("I am Error");
const second = new Error("I, too, am Error");

console.log(first); // Error: I am Error
console.log(second); // Error: I, too, am Error
```

### Throwing your own errors [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
We can throw our own error using the key word of throw

```
function giveMeNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Give me a number!");
  } else {
    return "yay number!";
  }
}

console.log(giveMeNumber(1)); // prints "yay number!";
console.log(giveMeNumber("apple")); // Uncaught Error: Give me a number!
console.log(giveMeNumber(1)); // doesn't get run
```

#### Catching [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
When an error occurs our program will stop execution. If we ever need to throw an error without stopping execution that we need to use try catch block syntax

```
function giveMeNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Give me a number!");
  } else {
    return "yay number!";
  }
}

try {
  giveMeNumber("apple");
} catch (error) {
  console.error(error);
}
```
We can also even catch JS built in error types
```
function callThatArg(arg) {
  callThatArg() // this will cause a TypeError because callThatArg is being passed a number
}

try {
  callThatArg();
  console.log("call successful"); // this line never executes
} catch (error) {
  if (error instanceof TypeError) {
    console.error(`Wrong Type: ${error.message}`); // prints: Wrong Type: arg is not a function
  } else {
    console.error(error.message); // prints out any errors that aren't TypeErrors;
  }
} finally {
  console.log("done");
}

```

<br/>

## [Error Types Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/error-types-quiz) 10 - mins

## [Error Handling Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/error-handling-quiz) - 10 mins

## Solo Practice [Error Handling](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/practice--error-handling)- 20 mins

<br/>

# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/formative-quiz---tuesday--repeat-) - 10 minutes


# EOD
