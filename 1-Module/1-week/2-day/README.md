# M1W1D2 Intro To JavaScript
<br/>

## What is JavaScript

JavaScript is a programming language that was originally developed to increase user interactivity with websites, and has grown to become a useful programming language in the backend of applications as well. JavaScript is now one of the most popular and widely used programming languages for building web applications today.
<br/>

## Why Javascript

### Static vs dynamic web content
One of the early benefits of JavaScript was its ability to handle dynamic content. In the early days of the web, all web pages were static, which means that the data displayed on the page was loaded by the browser ahead of time, and the page would need to be re-loaded for any updates to show up. Websites are dynamic when they are able to render new data without reloading the page, and this is the type of behavior that JavaScript was designed to do. For example, because of JavaScript, we are able to see new messages show up in a social media feed without having to refresh the page.

### Performing asynchronous tasks
In order for the user to have a smooth experience working with a dynamic website, it needs to be able to accomplish tasks asynchronously. Many programming languages operate synchronously, which means that one operation needs to be completed before the next operation will begin.

### Learning Objectives
- Given a working REPL interface, write and execute a statement that will print “hello world” using console.log
- Identify that strings are a list of characters defined by using double or single quotes
- Given an arithmetic expression using +, -, *, /, %, compute its value
- Given an expression, predict if its value is NaN
- Construct the truth tables for &&, ||, !
- Given an expression consisting of >, >=, ===, <, <=, compute its value
- Apply De Morgan’s law to a boolean expression
- Given an expression that utilizes operator precedence, compute its value
- Given an expression, use the grouping operator to change its evaluation
- Given expressions using == and ===, compute their values
- Given a code snippet using postfix ++, postfix --, +=, -=, /=, *=, predict the value of labeled lines
- Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.

<br/>

## Getting visual feedback in your programs [MDN console.logs Docs](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
- The first command we'll learn in JavaScript is console.log. This command is used to print something onto the screen. As we write our first lines of code, we'll be using console.log frequently as a way to visually see the output of our programs.
- While coding, you will notice that the application does a lot of things that you are un able to track. Using console.logs will allow you to print something to our terminal in order to confirm data or track what our code is doing.
- console.logs are different from return statements, which we will cover more in depth later

```
console.log("hello world");
console.log("how are you?");
```
<br/>

## Number Data Type [MDN Number Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

The Number data type in JavaScript does exactly what you expect! It is used to represent any numerical value, including integers and decimal numbers. As one of our first data types, we'll be interested in what operations we can use with numbers.

```
42;
-5;
3.14159;
7.0;
```

### Arithmetic Operators
For any given data type, we're interested in what operations we can perform with that type. We use the word operator to refer to the symbol that performs a particular operation. For example, the + operator performs the addition operation. Here are the common arithmetic operators in JS:

```
+ (addition)
- (subtraction)
* (multiplication)
/ (division)
% (modulo)
```

```
console.log(2 + 3); // => 5
console.log(42 - 42); // => 0
console.log(-4 * 1.5); // => -6
console.log(25 / 8); // => 3.125
```

#### The Modulo Operation
All of the math operators listed above are the simple operations you use everyday, except for maybe modulo %. Modulo gives us the remainder that results from a division. For example, 10 % 3 is 1 because when we divide 10 by 3, we are left with a remainder of 1. We can read 10 % 3 as "ten modulo three" or "ten mod three."

```
console.log(10 % 3); // => 1
console.log(14 % 5); // => 4
console.log(20 % 17); // => 3
console.log(18 % 6); // => 0
console.log(7 % 9); // => 7
```
<br/>

# Short Practices 15 min
- [Favorite Food](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/favorite-food)
- [Arithmetic Operators Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/arithmetic-operators)
- [Numbers Exercise](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/numbers-exercise)

    - Short Practice Q&A 15 min


## Boolean Data Type [MDN Boolean Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- The Boolean data type is perhaps the simplest type since there are only two possible values, true and false. However, we'll find booleans very useful because they will act as components of later concepts

```
console.log(true);
console.log(false);
```

### Logical Operators
- In the long run, we'll be using booleans to establish logic in our code. For this reason, the boolean operators can also be referred to as the logical operators. There are only three such operators:
- ! translates to not
- && translates to and
- || translates to or

```
console.log(true);
console.log(!true);
console.log(false);
console.log(!false);
console.log(true && false);
console.log(true || false);
```

# Short Practice 10 Minutes
- [Boolean Operators Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/boolean-operators)
- [Booleans Exercise](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/booleans-exercise)
    - Short Practice Q&A 15 min


<br/>

## Comparison Operators
```
> (greater than)
< (less than)
>= (greater than or equal to)
<= (less than or equal to)
=== (equal to)
!== (not equal to)

console.log(10 > 5); // => true
console.log(10 < 5); // => false
console.log(1 < 7); // => true
console.log(7 <= 7); // => true
console.log(5 === 6); // => false
console.log(5 !== 6); // => true
console.log("a" !== "A"); // => true
console.log(false === false); // => true
```

### === VS ==
In JavaScript there are two equality operators triple-equals (===) and double-equals (==). The operators differ in how they compare across differing types. Triple-equals performs the strict equality, meaning it will only return true if the types are the same. Double-equals performs the loose equality, meaning it can return true even if the values are of different types. Double-equals may coerce a value into another type for the comparison, and this behavior is hard to predict:

```
console.log(5 === "5"); // false
console.log(5 == "5"); // true
console.log(0 === false); // false
console.log(0 == false); //true
```

# Short Practice 10 Minutes
- [Comparison Operators Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/comparison-operators-quiz)
    - Short Practice Q&A 10 min

<br/>

## Variables [MDN Variable Docs](https://developer.mozilla.org/en-US/docs/Glossary/Variable)
Variables are used to store information to be referenced and manipulated in a computer program. They also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by programmers. It is helpful to think of variables as containers that hold information. Their sole purpose is to label and store data in computer memory. This data can then be used and even changed throughout the lifetime of your program.

### Initializing a variable
To initialize a variable in JavaScript we'll need two new pieces of syntax: let and =. We can give the variable any name that we wish and assign it a value. Once we initialize a variable, the variable will evaluate to the value assigned. Side note, yes there are other ways to initialize a variable but we will cover those later down the road:

```
let bootcamp = "App Academy";
console.log(bootcamp); // 'App Academy'

let birthYear = 2012;
console.log(birthYear); // 2012
```

### Declaring a Variable
- Declaring a variable is very similar to initializing it..... but we simple do not give it a value.

```
let bootcamp;
console.log(bootcamp); // undefined
```

### Assigning/Reassigning a variable
- Assiging a variable would be giving a previously declared variable a value.
- Reassiging a variable would be replacing a previously initialized variables value

#### Reassignment Shorthand
- Changing the value of a number variable is something fairly common in the programming world. Luckily there is some shorthand operators we can use:

```
let number = 0;
number += 10; // equivalent to number = number + 10
number -= 2; // equivalent to number = number - 2
number /= 4; // equivalent to number = number / 4
number *= 7; // equivalent to number = number * 7
console.log(number); // 14
```
- We also have other shorthand operators to add or subtract exactly 1 from a variable, the increment (++) and decrement (--) operators:

```
let year = 3004;
year++;
console.log(year); // 3005
year--;
console.log(year); // 3004
```
<br/>

## NaN [MDN NaN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
- NaN stands for not a number
- We may see this output if we ever try to perform and numerical operation where one of our arguments is not a number

```
let num;
console.log(num + 3); // NaN
console.log(undefined + 3); // NaN
console.log("fish" * 2); // NaN
```
- an off case that may be confusing is using arithmetic operations on a stringed number

```
let num = "20"
console.log(num + 5);
console.log(num * 5);
console.log(num - 5);
console.log(num / 5);
console.log(num % 5);
```

- Javscript is not a strictly typed (data type) language and will actually coerce a numbered string into the correct data type when given certain operations

# Short Practice 10 Minutes
- [Variables Exercise](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/variables-exercise)
- [Variables Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/variables-quiz)
    - Short Practice Q&A 15 min

# Problem Solving 20 mins
- [Asking Great Coding Questions](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/asking-great-coding-questions)
- [Utilizing Online Resources/Docs](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/utilizing-online-resources-and-documentation)
- [How to Learn Vid](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/how-to-learn)
- [Intro to Debugging](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/intro-to-debugging)

    - Problem Solving Discussion 5 mins

# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/formative-quiz--repeat----tuesday) - 10 minutes

# EOD
