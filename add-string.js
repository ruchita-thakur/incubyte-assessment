function add(nums) {
  let result = 0;
  let arr = [];
  arr = nums.split(/\n|,/);
  negativeNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    let number = Number(arr[i]);
    if (number < 0) {
      negativeNumbers.push(number);
    }
    result = result + number;
  }

  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers are not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return Number(result);
}

module.exports = add;
