function popFront(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

console.log(popFront([5, 1, 2, 3, 4]));
