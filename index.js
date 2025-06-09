var checkForTarget = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let currSum = nums[left] + nums[right];
    if (currSum > target) right--;
    else if (currSum < target) left++;
    else return true;
  }
  return false;
};

let arr = [1, 2, 4, 6, 8, 9, 14, 15];
let target = 13;
console.log(checkForTarget(arr, target));
