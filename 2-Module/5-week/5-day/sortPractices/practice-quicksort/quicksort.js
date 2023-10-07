function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // console.log('original array', arr)

  if (arr.length <= 1) {
    return arr
  }

  // Pick the first value as the pivot
  let pivot = arr[0]

  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
  let left = []
  let right = []

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
  }

  // Recursively sort the left
  // console.log('before left recursion', left)
  let sortedLeft = quicksort(left)
  // console.log('after left recursion', sortedLeft)
  // Recursively sort the right
  // console.log('before right recursion', right)
  let sortedRight = quicksort(right)
  // console.log('after right recursion', sortedRight)

  // Return the left, pivot and right in sorted order
  return [...sortedLeft, pivot, ...sortedRight]
}

// [2,4,6,8,1,3,5,7,9]


module.exports = [quicksort];
