# M1Wk4D1 Callbacks, Scope and Closure
<br/>

## Learning Boost 5 Min
<br/>

## First Class Object
A first class object is a type that supports the same basic operations as most other types. For example, numbers, strings, booleans, arrays, objects are all first class objects

There are thee main operations that a first class object should support
- Can be assigned to variables
- Can be arguments for functions
- Can be returned from a function

### Are functions first class objects?
you tell me?

```
//Can be assigned to variables
let myFunc = () => 'hello'
console.log(myFunc)
console.log(myFunc())
let myVar = myFunc()
console.log(myVar)

//Can be arguments for functions


let myFunc = (arg) => console.log(arg)

myFunc(function(){ return 'im a function'})

//Can be returned from a function

let myFunc = (arg) => arg()

console.log(myFunc(function(){ return 'im a function'}))
```
- [First Class Funcs MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

### Higher Order Functions
A Higher Order function is a function that accepts a function as an argument or returns a function



### Callback functions [MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```
let foobar = function(callback) {
  console.log("foo");
  callback();
  console.log("bar");
};

let sayHello = function() {
  console.log("hello");
};

foobar(sayHello); // prints
// foo
// hello
// bar
```


<br/>

# Paired Practice Until EOD
[Callbacks Project](https://github.com/appacademy/practice-for-week-02-try-out-callbacks/tree/main)
<br/>


# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-4---callbacks--scope-and-closure/formative-quiz---monday--repeat-) - 10 minutes

# EOD
