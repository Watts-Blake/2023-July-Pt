# M1W1D5 Intro To JavaScript
<br/>

## Tech Setup 2 hours
- If You have Question.... Please ask in your live questions channels
- When finished make sure to follow the check setup guides.

- [Windows Check Setup](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/tech-setup-check---wsl2-ubuntu)
- [Mac Check Setup](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/tech-setup-check---mac)


<br/>

## Function Expression Syntax [MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
JavaScript is well known for being a programming language that treats functions as "first-class objects." This fancy talk means that you can treat a function as a "normal" value by storing it in a variable.

```
// function declaration syntax
function myFunctionName(arg1, arg2) {}

// function expression syntax
let myFunctionName = function(arg1, arg2) {};

```
<br/>

## Mutability
- [Mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)
- [Immutable](https://developer.mozilla.org/en-US/docs/Glossary/Immutable)

### Primitive Data Types
- string
- number
- bigint
- boolean
- undefined
- symbol
- null

```
let sentenceStr = 'Today I Learned That Strings Are Primitive And They Are Immutable'

sentenceStr[1] = 'Yesterday'

console.log(sentenceStr)

let sentenceArr = ['Today', 'I', 'Learned', 'That', 'Arrays', 'Are', 'Mutable']


sentenceArr[0] = 'Yesterday'

console.log(sentenceArr)

```
<br/>

## Nested Loops
- Nested Loops are an important concept to understand in order to traverse nested data
- One of the most common times we will use nested loops is when we have nested arrays such as

```
let nestedArrays = [ ['SubArray1Index0', 'Index1'], ['SubArray2Index0', 'SubArray2Index1'], ['SubArray3Index0', 'SubArray3Index1'] ]

```
- You will notice that the code below does not print the values of the nested data, but actually prints the array at every index instead
```
let nestedArrays = [ ['SubArray1Index0', 'SubArray1Index1'], ['SubArray2Index0', 'SubArray2Index1'], ['SubArray3Index0', 'SubArray3Index1'] ]

for ( let i = 0 ; i < nestedArrays.length ; i ++ ) {
	let subArray = nestedArrays[i]
    console.log(subArray)
}

```
- What if we now wanted to traverse the data of each of these subArrays?
- This is where nested loops can come in handy

```
let nestedArrays = [ ['SubArray1Index0', 'Index1'], ['SubArray2Index0', 'SubArray2Index1'], ['SubArray3Index0', 'SubArray3Index1'] ]

for ( let i = 0 ; i < nestedArrays.length ; i ++ ) {
	let subArray = nestedArrays[i]

    console.log(subArray, '----', `Outer Loop Current Iteration ${i}`)

   // using a different variable in our inner loop so we do not affect the i variable in the outer loop
    for (let j = 0 ; j < subArray.length ; j ++ ) {

    	let element = subArray[j]

        console.log(element,'-----', `Inner Loop Current Iteration ${j}`)

    }
}

```
- We can also use nested loops for things like generating pairs from our data sets

```
let dogs = ['Paisley', 'Spike', 'Emma', 'Rocky']

for ( let i = 0 ; i < dogs.length ; i ++ ) {

  	let dog1 = dogs[i]
    console.log(dog1 + ' ---------------------> pairs below')

    for ( let j = 0 ; j < dogs.length ; j++ ) {

        let dog2 = dogs[j]

        console.log(dog1, dog2)
    }
}

```
- In this above example you may notice that we do indeed get pairs of dogs, but they are not unique and we are definitley being redundant and performing a few unnecessary steps
- In order to prevent this, we can use our nested loops to create unique pairs by tweaking our loops index variable like so

```
let dogs = ['Paisley', 'Spike', 'Emma', 'Rocky']

for ( let i = 0 ; i < dogs.length ; i ++ ) {

  	let dog1 = dogs[i]

    for ( let j = i + 1 ; j < dogs.length ; j++ ) {

        let dog2 = dogs[j]
        console.log(dog1, dog2)
    }
}

```
- If we have our nested loops index starting at 1 above the outer loop, this means that our nested loop will never see the index value from the outer and will only traverse data ahead of this index, which will create unique pairs
<br/>


# Short Practices 40 mins
- [Reverse String](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/reverse-string)
- [Range](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/range)
- [Log Between Stepper Recall](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/log-between-stepper-recall)
- [My Includes](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/my-includes)
- [Sum Array Recall](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/sum-array-recall)
- [Factors Of](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/factors-of)
    - Short Practice Q&A 15 min
<br/>

# Short Practices 60 mins
- [My Index Of](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/my-index-of)
- [Vowel Counter Recall](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/vowel-counter-recall)
- [Has Vowel](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/has-vowel)
- [Fizz Buzz Array](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/fizz-buzz-array)
- [First Vowel](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/first-vowel)
- [Even Numbers](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/even-numbersl)
- [Is Prime Recall](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/is-prime-recall)
    - Short Practice Q&A 15 min

<br/>

# Short Practices Until EOD
- [Last Vowel](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/last-vowel)
- [Pit Pat](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/pit-pat)
- [Remove Last Vowel](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/remove-last-vowel)
- [Pairs Maker](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/pairs-maker)
- [Min Value (*)](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/min-value----)
- [Two Sum](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/two-sum)
    - Short Practice Q&A 15 min

<br/>


# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-1---intro-to-javascript/formative-quiz--repeat----saturday) - 10 minutes

# EOD
