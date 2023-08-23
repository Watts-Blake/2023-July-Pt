# M1Wk5D3 Recursion and IIFE's
<br/>

## [Learning Boost](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-5---recursion-and-iifes/learning-boost---wednesday) 5 Min
<br/>

## Default Parameters [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
So far, you've learned how to declare parameters to pass arguments into a function. Sometimes, you'll write a function that might require slightly different inputs depending on the use-case. Rather than write separate functions which would violate the DRY coding principle (Don't Repeat Yourself) you can use default parameters.

```
function growNumber(num, amount = 1) {
    console.log(amount)
    return num + amount;
}

growNumber(5)
// notice that the default paramter of 1 will be overwritten by 6 since we included an argument in our function call
growNumber(5, 6)
```

<br/>

## Default Params && Recursion

- Solution for range from Yesterdays Practice without default params
```

function range(start, end) {
  if (end <= start) return [];
  return [start].concat(range(start + 1, end));
}
console.log(range(1, 5)); // [1, 2, 3, 4]

// remember if you want to visually see what is going on the stack and coming off the stack, you can console.log it you just have to do it a little differently

function range(start, end) {
  if (end <= start) return [];
  console.log(start);
  let arrComingOffStack = [start].concat(range(start + 1, end));
  console.log(start, arrComingOffStack);
  return arrComingOffStack;
}
console.log(range(1, 5)); // [1, 2, 3, 4]
```

- Solution with default params
```
// using a default parameter of an empty array can help simplify the thought process of this recursive function

function range(start, end, arr = []) {

// this return will be our final evaluation after every number has been pushed
  if (start >= end) return arr;

// since we now have access to an array from our parameters, all we need to do is push our start number to this array on every recursive call

  arr.push(start);

// then take our recursive step and call our function with start increased by 1, our end number, and our array that we pushed to

  return range(start + 1, end, arr);
}

// solution with callstack logs

function range(start, end, arr = []) {
  console.log(start, "arr coming onto stack :", arr);
  if (start >= end) return arr;
  arr.push(start);
  let arrComingOffStack = range(start + 1, end, arr);
  console.log(arrComingOffStack);
  return arrComingOffStack;
}
```

- Notice the difference in the callstack with && w/out using defualt params

```
console.log("without default params");
function range1(start, end) {
  if (end <= start) return [];
  console.log(start);
  let arrComingOffStack = [start].concat(range1(start + 1, end));
  console.log(start, arrComingOffStack);
  return arrComingOffStack;
}
console.log(range1(1, 5)); // [1, 2, 3, 4]

console.log("with default params");

function range2(start, end, arr = []) {
  console.log(start, "arr coming onto stack :", arr);
  if (start >= end) return arr;
  arr.push(start);
  let arrComingOffStack = range2(start + 1, end, arr);
  console.log(arrComingOffStack);
  return arrComingOffStack;
}
console.log(range2(1, 5)); // [1, 2, 3, 4]
```




<br/>


## Paired Practice Until EOD
[Solving Problems Recursively pt 2](https://github.com/appacademy/aa03-recursion-pt2)
- https clone command
```
git clone --branch part-time --single-branch https://github.com/appacademy/aa03-recursion-pt2.git
```
- ssh clone command

```
git clone --branch part-time --single-branch git@github.com:appacademy/aa03-recursion-pt2.git
```
<br/>


# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-5---recursion-and-iifes/formative-quiz--repeat----wednesday) - 10 minutes


# EOD
