
function bubbleSort(arr) {

  let swapCheck = true

  while (swapCheck) {
    swapCheck = false
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {
        // Swap those values
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapCheck = true
        console.log(arr.join(","));
      }
      // Do not move this console.log
    }
  }
  // If you get to the end of the array and no swaps have occurred, return
  if (!swapCheck) return arr
  // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;
