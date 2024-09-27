function add(nums) {
  let result = 0;
  let arr = [];
  negativeNumbers = [];

  if (nums.startsWith("//")) {
    const delimiterEndIndex = nums.indexOf("\n");
    const customDelimiter = nums.substring(2, delimiterEndIndex);
    nums = nums.substring(delimiterEndIndex + 1);
    arr = nums.split(new RegExp(`\\${customDelimiter}`));
  } else {
    arr = nums.split(/\n|,/);
  }

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
