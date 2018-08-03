// Array: Push Front

function pushFront(arr, val) {
  // Loop through array starting from back end
  for (var i = arr.length; i > 0; i--) {
    // Set ending index to value of index before
    arr[i] = arr[i - 1];
  }
  // Set first index to the value we are inserting
  arr[0] = val;
  console.log(arr);
}

pushFront([2, 3, 4], 1);
