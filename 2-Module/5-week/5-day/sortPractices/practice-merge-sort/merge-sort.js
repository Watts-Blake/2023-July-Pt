// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) {
    return arr
  }

  // Divide the array in half
  let midPoint = Math.floor(arr.length / 2)

  let left = arr.slice(0, midPoint)
  let right = arr.slice(midPoint, arr.length)

  // Recursively sort the left half
  let sortedLeft = mergeSort(left)
  // Recursively sort the right half
  let sortedRight = mergeSort(right)

  // Merge the halves together and return
  return merge(sortedLeft, sortedRight)

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let mergedArr = []

  // Point to the first value of each array
  let i = 0
  let j = 0

  // While there are still values in each array...
  while (i < arrA.length || j < arrB.length) {

    // Compare the first values of each array
    let smallerVal;

    if (i === arrA.length) { // if arrB still has values, and end of arrA has been reached
      smallerVal = arrB[j]
      j++
    } else if (j === arrB.length) { // if arrA still has values, and end of arrB has been reached
      smallerVal = arrA[i]
      i++
    } else if (arrA[i] < arrB[j]){ // if valueA < valueB
      smallerVal = arrA[i]
      i++
    } else { // if valueB < valueA
      smallerVal = arrB[j]
      j++
    }
    // Add the smaller value to the return array
    mergedArr.push(smallerVal)
    // Move the pointer to the next value in that array
  }

  // Return the return array
  return mergedArr

}

module.exports = [merge, mergeSort];
