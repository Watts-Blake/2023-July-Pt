# M1Wk5D2 Recursion and IIFE's
<br/>

## Learning Boost 5 Min
<br/>

## String Interpolation / Template Literals [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
When working with the String primitive type in JavaScript, you've probably noticed it is not always an easy experience adding in variables or working with multi-line strings. In the ES6 edition of JavaScript one of the new features that was introduced to help with this problem was the Template Literal. A Template Literal is a new way to create a string literal that expands on the syntax of the String primitive type allowing for interpolated expressions to be inserted easily into strings.

- To use string interpolation, we will start by creating are strings with back ticks \`above your tab key to the left of the 1 key on your tilde key  \`
- Once you have created your string with back ticks, you can insert javscript variables or code by inserting a dollar sign followed by curly braces, and putting your js variable or code inside the curly braces \`${insert code here}\`

```
// string interpolation will allow us to do javascript inside of our strings

// this includes inserting named variables
let firstName = 'Blake'
let lastName = 'Watts'
let age = 28

let interpolatedString = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old`

console.log(interpolatedString)

// you can also do js operations
let interpolatedString = `this will be our age - 5 : ${ age - 5 }, this will be 5 + 7: ${ 5 + 7 }`

// you can also use functions while interpolatiing
const upperWord = (string) => string.toUpperCase()
const lowerWord = (string) => string.toLowerCase()

let interpolatedString = `Hello, my name is ${upperWord(firstName)} ${lowerWord(lastName)} and I am ${age} years old`

console.log(interpolatedString)
```
<br/>

## The Call Stack [MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
The call stack is a structure that JavaScript uses to keep track of the evaluation of function calls. It uses the stack data structure. In Computer Science, a "stack" is a general pattern of organizing a collection of items. For our current use of a stack, the items being organized are the function calls that occur during the execution of our program. We'll be exploring stacks in great detail further in the course. For now, we can imagine a stack as a vertical pile that obeys the following pattern:

- new items must be placed on top of the pile - we refer to this as pushing a new item to the stack
- at any point, the only item that can be removed is the top of the pile - we refer to this as popping the top item from the stack
```
function foo() {
  console.log("a", ': foo has been added to the call stack');
  bar();
  console.log("e", ': foo will finish executing then be removed from the call stack');
}

function bar() {
  console.log("b", ': bar has been added to the call stack');
  baz();
  console.log("d", ': bar will finish executing then be removed from the call stack');
}

function baz() {
  console.log("c", ': baz has been added to the call stack, will finish executing then be removed');
}

foo();
console.log("f", ': everything on the call stack has finished executing')

```

<br/>

## Recursion [MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).

### 3 parts to recursion
- Base Case - why it stops recursion
- Recursive Case - why it continues recursion
- Recursive Step - the step it takes towards our base case

```
const recurse = (x) => {
  console.log(x);
  // base case x === 0
  // recursive case x > 0
  if (x > 0) {
    // recursive step == calling function with x -1
    recurse(x - 1);
  };
};

recurse(10);

```

### Recursive Callstack
- Remember our Callstack that we talked about earlier
- Once a function is put on the callstack it must finish executing before be removed from the call stack
```
const recurse = (x) => {
  console.log(
    x,
    ": function call starting to execute, added to the call stack"
  );
  // base case x === 0
  // recursive case x > 0
  if (x > 0) {
    // recursive step == calling function with x -1
    recurse(x - 1);
  }
  console.log(
    x,
    ": function call about to finish execution, will be removed from the call stack"
  );
};
recurse(2);

```

- On the first function call recurse(3)
- we added our 1st function to the callstack with the number 2
- 2 is greater than 0, so we call our function again with 2 - 1 which is 1
- we now have added our 2nd function to our call stack with the number 1
- 1 is greater than 0, so we call our function again with 1 - 1 which is 0
- we now have added our 3rd function to our callstack with the number 0
- 0 is not greater than 0 so the 3rd function finishes executing by loggin the value of x(0) at the time it was called and is removed from the call stack
- Our 2nd function call will now log the value of x(1) at the time it was called then finish executing and be removed from the call stack
- Our 1st function call will now log the value of x(2) at the time it was then finish executing and be removed form the call stack.


<br/>

## Solo Practice 45 minutes
[VSCode Debugger Practice](https://github.com/appacademy/aa03-vscode-debugger)

<br/>

## Paired Practice Until EOD
[Solving Problems Recursively](https://github.com/appacademy/aa03-recursion-pt1)
<br/>


# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-5---recursion-and-iifes/formative-quiz--repeat----tuesday) - 10 minutes

# EOD
