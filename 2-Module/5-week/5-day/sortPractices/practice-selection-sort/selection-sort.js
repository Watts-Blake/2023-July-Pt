

function selectionSort(arr) {

  // Copy the original array
  let arrCopy = [...arr]
  // Create an array to store the sorted values
  let sorted = []
  // While the array is not empty...

  while(arrCopy.length) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = 0;

    for(let i = 1; i < arrCopy.length; i++) {
      // Save and remove the value at the min index
      if (arrCopy[i] < arrCopy[minIndex]) {
        minIndex = i
      }
    }


    let selected = arrCopy[minIndex]
    arrCopy.splice(minIndex, 1)

    // Add the min value to the end of the sorted array
    sorted.push(selected)

  }

    return sorted

}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0
  // Repeat while the unsorted half is not empty:
  while (pointer < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = pointer

    for (let i = minIndex; i < arr.length; i++) {
      // Save the min value
      if (arr[i] < arr[minIndex]) {
        minIndex = i
      }
    }

    let minValue = arr[minIndex]

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let j = minIndex; j >= pointer; j--) {
      arr[j] = arr[j - 1]
    }

    // Put the min value at the divider
    arr[pointer] = minValue

    // Increment the divider and repeat
    pointer++

  }

  return arr
}


module.exports = [selectionSort, selectionSortInPlace];
