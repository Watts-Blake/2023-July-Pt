# M1Wk4D3 Callbacks, Scope and Closure
<br/>

## Learning Boost 5 Min
<br/>

## Scope
Scope refers to the variables that are available per our program, or code.
- Global - the global space of Js
- Local/Function Scope - within your function definition
- Block - within your code block surrounded by curlies

```
// not using a key word to declare your variable will assing it to our global scope
// this is considered bad practice, we should always use a key word to define our variable even if it is gloab
global1 = "global scoped 1";

// we can initialize a global variable
let global2 = "global scoped 2";

console.log(global1);

const ourFunc = () => {
  // we have access to global variable everywhere
  console.log(global1);

  console.log(global2);

  // initializing a variable inside our function means only everything that comes after this line of code and is inside of our function will have access to this variable
  let funcVar1 = "func scoped 1";

  console.log(funcVar1);

  for (let i = 0; i < 10; i++) {
    // we have access to our global and our func initialized variables
    console.log("accessing from inside of a block inside of a func", global2);
    console.log("accessing from our func scope into our block scope", funVar1);

    // initializing a block scoped variable
    let block1 = "block scoped 1";

    console.log("accessing from same scope", block1);
  }
  // notice we do not have access to any variables initialized within our for loop
  // this is because of block scoping, anything defined inside that scope will not be able to be accessed outside of that scope
  console.log("trying to access from outside of scope", block1);
};

// notice we do do not have access to our function or block scoped variables
console.log("trying to access out of scope", funcVar1);
console.log("trying to access out of scope", block1);
console.log("accessing from the same scope", global2);

ourFunc();

```
<br/>

## Variables
In the beginning there was var. The var keyword used to be the only way to declare a JavaScript variable. However, in ECMAScript 2015 JavaScript introduced two new ways of declaring JavaScript variables: let and const. Meaning, in JavaScript there are three different ways to declare a variable. Each of these keywords has advantages and disadvantages and we will now talk about each keyword at length.
- let: any variables declared with the keyword let allows you to reassign that variable. Variable declared using let is scoped within a block.
```
for (let i = 0; i < 10; i++) {
  let variable = "declared with let and is block scoped";
  console.log(variable);
}
console.log(i);
console.log(variable);

```
- const: any variables declared with the keyword const will not allow you to reassign that variable. Variable declared using const is scoped within a block.
```
for (let i = 0; i < 10; i++) {
  const str = "declared with const, can not be reassing and is block scoped";
  string = "reassignment";
  console.log(str);
  // notice that you still can mutate that data if it is able to be mutated
  const arr = [1, 2, 3, 4];
  arr[0] = "we mutated";
  console.log(arr);
}
console.log(i);
console.log("these are block scoped so we do not have access", str);
console.log("these are block scoped so we do not have access", arr);

```
- var: A var declared variable may or may not be reassigned, and the variable is scoped to a function.
```
const ourFunc = () => {
  console.log(
    "the var key word will hoist its declaration to the top of your function, but your variable swill be undefined",
    str,
    arr
  );
  for (let i = 0; i < 10; i++) {
    var str = "declared with const, can not be reassing and is block scoped";
    string = "reassignment";
    console.log(str);
    // notice that you still can mutate that data if it is able to be mutated
    var arr = [1, 2, 3, 4];
    arr[0] = "we mutated";
    console.log(arr);
  }
  console.log("var is function scoped so we do have access", str);
  console.log("var is function scoped so we do have access", arr);
};

console.log(
  "var is function scoped so we do not have access in our global",
  str
);
console.log(
  "var is function scoped so we do not have access in our global",
  arr
);
ourFunc();

```
<br/>

## Short Solo Practices 30 mins
- [Refactoring Variables](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-4---callbacks--scope-and-closure/refactoring-variables)
- [Js Variables Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-4---callbacks--scope-and-closure/javascript-variables-quiz)
- [Scope Debugging](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-4---callbacks--scope-and-closure/scope-debugging)
- [Scope Debugging Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-4---callbacks--scope-and-closure/scope-debugging-quiz)
- [Scope Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-4---callbacks--scope-and-closure/scope-quiz)
<br/>

## Closures
What is a closure? This question is one of the most frequent interview questions where JavaScript is involved. If you answer this question quickly and knowledgeably you'll look like a great candidate. We know you want to know it all so let's dive right in!

```
function climbTree(treeType) {
  let treeString = "You climbed a ";

  function sayClimbTree() {
    // this inner function has access to the variables in the outer scope
    // in which it was defined - including any defined parameters
    return treeString + treeType;
  }

  return sayClimbTree();
}

// We assign the result to a variable
const sayFunction = climbTree("Pine");

// So we can call it, and indeed the variables have been saved in the closure
// and the sayFunction prints out their values.
console.log(sayFunction); // You climbed a Pine
```
### Private state
Information hiding is incredibly important in the world of software engineering. JavaScript as a language does not have a way of declaring a function as exclusively private, as can be done in other programming languages. We can however, use closures to create a private state within a function.
```
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log(counter()); // => 1
console.log(counter()); // => 2

//we cannot reach the count variable!
counter.count; // undefined
let counter2 = createCounter();
console.log(counter2()); // => 1
```


<br/>

# Paired Practice Until EOD
[Scope Project](https://github.com/appacademy/practice-for-week-02-scope)
<br/>


# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-4---callbacks--scope-and-closure/formative-quiz---thursday--repeat-) - 10 minutes

# EOD
