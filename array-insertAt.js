function insertAt(arr, index, val) {
  // Iterate through array starting from the back
  for (var i = arr.length; i > 0; i--) {
    // If user input index is equal to current index of for loop,
    // then we set current index to user input value and break out of loop
    if (i === index) {
      arr[i] = val;
      break;
    } else {
      // Shift array values to the right
      arr[i] = arr[i - 1];
    }
  }
  return arr;
}

console.log(insertAt([1, 2, 4, 5], 2, 3));
