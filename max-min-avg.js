// Max, Min, Average
function maxMinAvg(arr) {
  let min = arr[0];
  let max = arr[0];
  let count = 0;
  let avg = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    count += arr[i];
  }
  avg = count / arr.length;
  let statement = `The minimum is ${min}, the maximum is ${max}, and the average is ${avg}`;
  return statement;
}
console.log(maxMinAvg([1, -2, 9, 4]));
