# M1Wk3D3 Node, POJO, Advanced Arrays
<br/>

## Learning Boost 5 Min
<br/>

## Rest, Spread and Destructuring

### Rest Parameters [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
Rest parameter syntax allows us to capture all of a function's incoming arguments into an array. Let's take a look at the syntax:

```
function adder(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// adder will assign the first two parameters to the passed in arguments
// and ignore the rest
console.log(adder(2, 3, 4)); // => 5
console.log(adder(1, 5, 19, 100, 13)); // => 6

// with using rest parameter

let adder = (...nums) => {
    let sum = 0
    console.log(nums)
    for (num of nums) {
        sum += num
    }
    return sum
}
console.log(adder(2, 3, 4)); // => 5
console.log(adder(1, 5, 19, 100, 13)); // => 6
```

### Spread Syntax [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
Let's now talk about a very interesting and useful operator in JavaScript. In essence, the spread operator allows you to break down a data type into the elements that make it up.

Spread operator syntax is very similar to rest parameter syntax but they do very different things:

The spread operator has two basic behaviors:

- Take a data type (i.e. an array, an object) and spread the values of that type where elements are expected
- Take an iterable data type (an array or a string) and spread the elements of that type where arguments are expected.

```
let person = {firstName: 'Blake', lastName: 'Watts', dog: 'paisley', age: 28, hobbies : ['coding', 'hiking', 'video games']}

// spread can be used to spread out a data types values, because of this, it can be used to make copies of datatypes that are not deep copies
let personCopy = {...person}

personCopy.firstName = 'Edward'
console.log('person copy :', personCopy, 'original person :',person)


let arr = [1, 2, 3, 4]

let dee
let copy = [...arr]

copy[0] = 'we mutated'

console.log('original :', arr, 'copy :', copy)
```

You can also use it for spreading two datatypes values together, similar to concatenation

```
let newArr = [...arr, ...copy]
console.log(newArr)

let colors = { red: "scarlet", blue: "aquamarine" };
let colors2 = { green: "forest", yellow: "sunflower" };

let moreColors = { ...colors, ...colors2 };
console.log(moreColors)
```

Lastly, you can Spread arguments to a function out as well.

```
function speak(verb, noun) {
  return "I like to go " + verb + " with " + noun + ".";
}

const words = ["running", "Jet"];

console.log(speak("running", "Jet")); // => I like to go running with Jet.
console.log(speak(...words)); // => I like to go running with Jet.
```


<br/>

## Destructuring [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
The destructuring assignment syntax allows you to extract parts of an array or object into distinct variables.

```
let numArray = [10, 20];

// here we are "unpacking" the array values into two separate variables
// when destructuring an array you must use []'s
let [firstEl, secondEl] = numArray;

console.log(firstEl); //=> 10
console.log(secondEl); //=> 20

```
You can also swap variables with Array destructuring

```
let num1 = 17;
let num2 = 3;

// this syntax will swap the values of the two variables
[num1, num2] = [num2, num1];

console.log(num1); // 3
console.log(num2); // 17
```

Or you can destructure your Objects

```

let person = {firstName: 'Blake', lastName: 'Watts', dog: 'paisley', age: 28, hobbies : ['coding', 'hiking', 'video games']}

//when destructuring from objects, you must use their key names that are present and wrap them in {}'s
let {firstName, dog, hobbies} = person
console.log(firstName, dog, hobbies)

// we alias our keys to use as different names if need be
let {firstName: name, hobbies : thingsILikeDoing} = person

console.log(name, thingsILikeDoing, '----', person)


```
<br/>

# Short Practices 40 Minutes
- [Spread it Out](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/spread-it-out-)
- [Break Down Object](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/break-down-object-)

- [Copy Array](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/copy-array)
- [Clone Object](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/clone-object)
    - Short Practice Q&A 15 min
<br/>

## Paired Project Practice until EOD
- [POJO Basics Project](https://github.com/appacademy/practice-for-week-02-pojo_basics)


# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/formative-quiz---thursday--repeat-) - 10 minutes

# EOD
