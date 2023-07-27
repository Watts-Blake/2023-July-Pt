# M1W1D4 Intro To JavaScript
<br/>

## Conditionals [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
Conditional Statements are the first fundamental control structure for writing JavaScript and they are pretty straightforward.The simplest conditional statement is the if statement. An if statement has two parts, the test expression (the code that immediately follows the if which goes in parentheses), and the then expression (this code belongs in braces after the if expression). The then expression will only run when the if expression is truthy.
```
// this is the test expression
if (3 === 3) {
  // this is the then expression
  // this code will run if the above statement is true
  console.log("this is a three!");
}

```
<br/>

## Loops [Mdn Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
Loops are a fundamental control structure for writing JavaScript. Loops will repeatedly execute a section of code while a condition is true. Loops are simple to write and incredibly powerful! There are many variations of loops but we will be covering the two most fundamental loops now - while loops and for loops.
- In general all a loop is doing, is creating a number range for us to incrementally use on data
- The two most common loops we will use our While loops and For loops.
- Sometimes it might make sense to use one ove the other, but generally either a while or for loop could be used for the same thing

### 3 things needed for iteration through loops
- keyword, while or for
- condition to continue looping
- incremntal step


```
// while loop
let i = 0

while (i < 10 ) {
    console.log("this is our step", i)

    i++
}


// for loop
for (let i = 0 ; i < 10 ; i ++) {
    console.log("this is our step", i)
}

```
<br/>

## Arrays [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
- JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
- JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
- JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
- JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).


```
let arr1 = [1, 2, 3, 4]
console.log(arr1)

let arr2 = Array(1, 2, 3, 4)
console.log(arr2)

```
### Indexing into Arrays && Array Length
- Similar to the strings w ehave worked with previously, we arew also able to index into an array or calculate its length.

```
let arr1 = [1, 2, 3, 4]
console.log(arr1.length())
console.log(arr1[2])
console.log(arr1[5])
```

## Looping with Arrays
- Looping over the data within arrays will be a really common practice during our time as an engineer.
- This is the easiest way for us to traverse through and look at ever index of an array individually

```
let arr = ["hi", "how", "are", "you"]

// for loop
for (let i = 0 ; i < arr.length ; i ++) {
    console.log(arr[i])
}

// while loop
let i = 9

while (i < arr.length) {
    console.log(arr[i])
    i++
}

```


# Short Practices 20 min
- [Is Five](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/is-five)
- [Is Odd](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/is-odd)
- [Log Between](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/log-between)
    - Short Practice Q&A 15 min
<br/>

# Short Practices 20 min
- [Print Fives](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/print-fives)
- [Log Between Stepper](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/log-between-stepper)
- [Three or Seven](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/three-or-seven)
    - Short Practice Q&A 15 min

<br/>

# Short Practices 20 min
- [Sum Array](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/sum-array)
- [Add Arrays](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/add-arrays)
    - Short Practice Q&A 15 min

<br/>

# Short Practices 25 min
- [Doubler](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/doubler)
- [Vowel Counter](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/vowel-counter----)
    - Short Practice Q&A 15 min

<br/>

# Short Practices until EOD
- [For Loop Translation (*)](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/for-loop-translation----)
- [While Loop Translation (*)](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/while-loop-translation----)
- [Is Prime](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/is-prime)
- [Fizz Buzz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/fizz-buzz)
- [Is Substring](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/is-substring)
- [Array Index Of (*)](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/array-index-of----)
- [String Included (*)](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/string-included----)
- [Pig Latin - Slice Research](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/vowel-counter----)
    - Short Practice Q&A 15 min


# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/formative-quiz--repeat----thursday) - 10 minutes

# EOD
