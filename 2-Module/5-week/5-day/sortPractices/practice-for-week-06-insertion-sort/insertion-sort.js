// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  let arrCopy = [...arr]
  let sorted = []

  while(arrCopy.length) {
    console.log(sorted.join(','));

    let curr = arrCopy.pop();
    sorted.push(null);

    let i = sorted.length - 1;

    while (i > 0) {
      if (sorted[i - 1] < curr) {
        break;
      } else {
        sorted[i] = sorted[i - 1];
        i--;
      }
    }
    sorted[i] = curr;
  }
  return sorted;
  // Your code here
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  let divider = 1

  // for (let divider = 1; divider < arr.length; divider++){
  while (divider < arr.length) {
    console.log(arr.join(','));

    let value = arr[divider];

    let i = divider

    while (i > 0) {
      if (arr[i - 1] < value) {
        break;
      } else {
        arr[i] = arr[i - 1]
        i--
      }
    }

    arr[i] = value
    divider++

  }

  return arr


  // Your code here
}

module.exports = [insertionSort, insertionSortInPlace];
