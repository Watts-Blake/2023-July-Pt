# M1W1D3 Intro To JavaScript
<br/>

## String Datatype [MDN String Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- The String object is used to represent and manipulate a sequence of characters.
- There are a few ways that you can create a string
```
let name = 'Blake'
let middleName = "Tanner"
let lastName = `Watts`
```
- You are also able to use double quotes and singles quotes inside of a string by

```
// making sure that the quotes wrapping the content of the string are not the same as any quotes inside of the string
let sentence = "Hello's how's our's you's today's?"
let famousQuote = ' "You miss 100% of the shots you dont take. - Wayne Gretzky" - Michael Scott '

// or you can use escape characters
let famousQuote = " \"You miss 100% of the shots you dont take. - Wayne Gretzky\" - Michael Scott "

```

### String Length
- There will be a lot of JS methods that you can use to your advantage to help with the string data type
- Some very common ones are listed below
```
//Calculating length
console.log("Paisley".length)
let name = "Edward"
console.log(name.length)

console.log(name.length > 3)

```
### Indexing Length
Strings consist of multiple characters. These characters are numbered by indices starting at 0. So in the string 'bootcamp', 'b' is at index 0, 'o' is at index 1, 'o' is at index 2, 't' is at index 3, and so on. We can look at particular characters of a string by using [] and specifying an index:

```
console.log("bootcamp"[0]); // => 'b'
console.log("bootcamp"[1]); // => 'o'
console.log("bootcamp"[2]); // => 'o'
console.log("bootcamp"[3]); // => 't'
console.log("bootcamp"[7]); // => 'p'
console.log("bootcamp"[10]); // => undefined
console.log("bootcamp"[-3]); // => undefined
```

### Using indexOf() [MDN indexOf Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- IndexOf is almost the opposite of indexing into a string by number
- IndexOf will return the index of a charcter or substring if found with inside the called upo string

```
// Looking for a character
console.log("bagel".indexOf("b")); // => 0
console.log("bagel".indexOf("a")); // => 1
console.log("bagel".indexOf("l")); // => 4
console.log("bagel".indexOf("z")); // => -1

// Looking for a substring
console.log("door hinge".indexOf("oor")); // => 1
console.log("door hinge".indexOf("hi")); // => 5
console.log("door hinge".indexOf("hint")); // => -1
```
### String Concatenation
Concatenation is just a fancy word for joining strings together into a single string. To concatenate strings, we use the + operator: , we can also use a JS method called concat [MDN String.Concat Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

```
// using the plus sign
console.log("hello" + "world"); // => 'helloworld'
console.log("goodbye" + " " + "moon"); // => 'goodbye moon'

// using concat
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
```

# Short Practices 15 min
- [String Operators Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/string-operators)
- [Strings Exercize](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/strings-exercise)
    - Short Practice Q&A 15 min

<br/>

## Functions [MDN Function Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
A function is a set of code that will run when called. Functions really start to make sense when put in the perspective of solving problems. For example, imagine we want to use code to find the average of two given numbers. This means we'll write code that takes two numbers, adds them together, and then divides their sum by two:

### Function Declaration
A function declaration is when a function is defined and saved so that we can use it or re-use it later. When we use a declared function, we are calling the function. Calling a function is also known as invoking a function. A function call is also known as a function invocation. The example below declares a function named average and invokes it later on.

#### To Define a function we need 4 things
- The Name of the function
- A list of parameters to the function enclosed in parentheses ()
- Code wrapped in curly braces to be ran when that function is called {}
- A return statement to assign a value to that function.

```
// function declaration
function average(number1, number2) {
  return (number1 + number2) / 2;
}

// calling/invoking our function
average(1, 7)
console.log(average(1,7))
```

## Parameters && Arguments
- Parameters are comma separated variables specified as part of a  function's declaration.
- Arguments are values passed to the function when it is invoked.
```
function add(firstParameter, secondParameter) {
  console.log(firstParameter + secondParameter);
}

// the two numbers in this add function invocation are the arguments
add(1, 2); //=> 3

```
### To Many Arguments
- In JavaScript a function will not throw an error if the number of arguments passed during a function invocation is different than the number of parameters listed during function declaration. This is very important to know!

```
function add(firstParameter, secondParameter) {
  console.log(firstParameter + secondParameter);
}

// this will ignore the 17 & 14
// the first two arguments passed in will be assigned to the first two parameters
add(1, 2, 17, 14); //=> 3
```

### Not Enough Arguments
- If we do not give our function invocation the right amount of arguments to run the given code properly we may run into errors or receive an unexpected return value
```
function add(firstParameter, secondParameter) {
  console.log(firstParameter + secondParameter);
}

add(5); //=> NaN
```
# Short Practices 40 min
- [Intro to Functions Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/intro-to-functions-quiz)
- [Goodbye(*)](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/goodbye----)
- [Muscle Memory](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/muscle-memory)
- [Plus Five](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/plus-five)
- [Call This Function](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/call-this-function)
    - Short Practice Q&A 15 min




# Short Practices 40 mins
- [Whisper](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/whisper)
- [Yell(*)](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/yell----)
- [Echo(*)](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/echo----)
- [Average of Two](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/average-of-two)
- [Hello](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/hello)
- [Divide by Three](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/divide-by-three)
- [Average of Four](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/average-of-four)
    - Short Practice Q&A 15 min


# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/formative-quiz--repeat----wednesday) - 10 minutes

# EOD
