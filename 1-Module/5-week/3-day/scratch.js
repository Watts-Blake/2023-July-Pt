// Warm up Problem for the day
// Write a function called recRev that takes in an array and outputs that array reversed. You must solve this problem using recursion and without mutating the original array.

let arr = [1, 2, 3, 4, 5]
// [5, 4, 3, 2, 1]

// imagining the call stack
// slice a part of the array to be passed as an argument
// what is returned by the previous recursive step
// the value i want to concat aka add to the end of the array
// [1, 2, 3, 4, 5]   []
//  [1, 2, 3, 4]     [] + [5]
//     [1, 2, 3]     [5] + [4]
//         [1, 2]    [5, 4] + [3]
//             [1]   [5, 4, 3] + [2]
//             []    [5, 4, 3, 2] + [1]

// let recRev = arr => {
//     // base case
//     // when the array length === 0

//     if (arr.length === 0) {
//         return []
//     }

//     // recursive case
//     // if the array passed in as an argument still has values within it
//     if (arr.length > 0) {
//         let curr = arr[arr.length - 1]
//         let copy = arr.slice(0, arr.length - 1)

//     // recursive step
//     // passing in a slice of the array as an argument to the recursive call of the function
//         let res = [curr].concat(recRev(copy))
//         // console.log(res)

//         return res
//     }


// }

// debugger
// recRev(arr)
// console.log(arr)

// same problem, but with default parameters

let recRev = (arr, res = []) => {
    // base case
    // when the array length === 0
    if (arr.length === 0) {
        return res
    }

    // recursive case
    // if the array passed in as an argument still has values within it
    if (arr.length > 0) {
        // recursive step
        // passing in a slice of the array as an argument to the recursive call of the function
        let curr = arr[arr.length - 1]
        let copy = arr.slice(0, arr.length - 1)

        // push the current value into the res array, for the next recursive step to utilize
        res.push(curr)

        // console.log(res)

        return recRev(copy, res)
    }

}


console.log(recRev(arr))
console.log(arr)


// default parameters

function multiply(a, b = 1) {
    return a * b;
  }

  console.log(multiply(5, 2)); // b's value is taken from the argument passed in ( 2 )
  // Expected output: 10

  console.log(multiply(5)); // since no argument was bassed for the b parameter, b defaults to 1
  // Expected output: 5
