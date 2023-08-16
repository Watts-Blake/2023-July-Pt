# M2Wk1D2 Big - O
<br/>

## Learning Boost 5 Min
<br/>

## Big - O
We have all written code that may be sloppy, or seem redundant, but we havent really talked about is it optimal.
Big - O Notation will be a methodology that we can use to determine how optimal are code is, and give us insight of how we could refactor it to be better.

## Why Big - O ?
When talking about our code, its easy to say hey that runs well, great, bad, ok, whatever you would like to say, but it will never be as precise as it needs to be.

Big - O notations solves this for us and gives us  a way to precisely talk about our codes performance.

You might think, why dont we just time our code?
We can surely decide what code is better when we are able to time are code right?

This is true to an extent but timing our cod eisnt always reliable.

This is because
- Different computers/machines will have different times
- Even our own machine will have different times between tests.
- Speed isnt precise enough for all Algorithms.

We could always count our operations in each code to compare to eachother to decide which code has less, and be more efficient

- But counting operations is time consuming and can get tricky when we get into loops, and especially nested loops

```
const plusNumTimes = (num) => {
    return num * num
}

const plusNumTimes = (num) => {
    let total = 0
    for (let i = 0 ; i <= num ; i++) {
        total += num
    }
    return total
}
```

### What is Big - O Already?
Big - O allows gives us a precise way to talk about our codes runtimes and how it can grow through a representation of its operations

This runtime can grow in many ways, some exmaples are

- linear growth f(n) = n
- quadratic f(n) = n^2
- constant f(n) = 1

[Visual Aide](https://rithmschool.github.io/function-timer-demo/)
### Constants - dont really affect the time of our code running
- Arithmetic Operators
- Variable Assignment

### Not Constant - doing a certain number of operations depending on a argument or specific case
- For loops that are based of a input number or input arrays length
- Nested For loops input that are based of a input number or input arrays length
- Using loops like these are not Constant because we perform a certain number of operations that will grow depending on the size of the argument we give them



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
