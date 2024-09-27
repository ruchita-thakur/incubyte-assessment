function add(nums) {
  let result = 0;
  let arr = [];
  arr = nums.split(",");
  for (let i = 0; i < arr.length; i++) {
    result = result + Number(arr[i]);
  }
  return Number(result);
}

module.exports = add;
