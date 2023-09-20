// Array practice

//Identify the time complexity of each of these functions with a 1 sentence
//justification for your answer. Assume `arr` is an array of length _n_.

//You may find the following code helpful for testing your code:

// 1. ) arr.push()

function randomNumberArr(max) {
  const res = new Array();

  for (let i = 0; i < max; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(max));

    const startTime = performance.now();
    res.push(randomNumber);
    const endTime = performance.now();
    console.log(endTime - startTime);
  }

  return res;
}

// randomNumberArr(100);
/*
Use the randomNumberArr function and the following pushTest
function to test the runtime of JavaScript's push with different
array sizes. The pushTest function iterates n number of times
where n is the size of an array, and pushes each element into a new array.
*/

function pushTest(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  return arr;
}

/*
Test pushTest with a variety of inputs and run timing benchmarks
to identify the runtime.

Here's a sample test that prints the amount of time that it takes
to run the pushTest function with an array size of 100000:
*/

//Time complexity: O(?)
//Space complexity: O(?)
//[push docs]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// 2. ) arr.pop()

function popTest(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    arr.pop();
  }

  return arr;
}

/*
Use the popTest function to test the JavaScript Array pop method.
Test it the same way as you tested the pushTest method. Play around
with different input sizes until you have a good grasp of the time
complexity of Array's pop method.
*/

// Time complexity: O(?)
// Space complexity: O(?)
// Justification: _Fill this in_
//[pop docs] : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

// 3. ) arr.shift()

const shiftTest = async (arr) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const startTime = performance.now();
    await arr.shift(i);
    const endTime = performance.now();
  }

  return arr;
};

shiftTest(randomNumberArr(10000));

/*
Before running the test, what do you think the
time complexity of the JavaScript Array shift is?
Take a few moments with your pair and discuss it.

Use this function to test the JavaScript Array shift method.
Feel free to play around with the function or test something
you and your pair would like to try.
*/

// Time complexity: O(?)
// Space complexity: O(?)
//[shift docs]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

// 4. ) arr.unshift()

/*
Before running the test, what do you think the
time complexity of the JavaScript Array unshift is?

Use this function to test. Feel free to play
around with the function or test something you would
like to try.
*/

function unshiftTest(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.unshift(i);
  }

  return arr;
}

/*
Based on your benchmarks, was your original hypothesis
correct? Remember, the unshiftTest function is executing
the unshift method n number of times where n is the array size.
*/

// Time complexity: O(?)
// Space complexity: O(?)
//[ unshift docs ]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

// ------------------------- for the rest of thes methods you will need to do the testing yourself -------------------------

// 5. ) arr.splice()

// Time complexity: O(?)
// Space complexity: O(?)
//[splice docs ]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

//  6. ) arr.slice()

// Time complexity: O(?)
// Space complexity: O(?)
//[slice docs]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// 7. ) arr.indexOf()

// Time complexity: O(?)
// Space complexity: O(?)
// [indexOf slice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

//8. ) arr.map()

// Time complexity: O(?)
// Space complexity: O(?)
//[map docs]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// 9. ) arr.filter()

// Time complexity: O(?)
// Space complexity: O(?)
//[filter docs]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 10. ) arr.reduce()

// Time complexity: O(?)
// Space complexity: O(?)
//[reduce docs]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// 11. ) arr.reverse()

// Time complexity: O(?)
// Space complexity: O(?)
//[reverse docs]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

// 12. ) `[...arr]`

// Time complexity: O(?)
// Space complexity: O(?)
//[spread docs]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
