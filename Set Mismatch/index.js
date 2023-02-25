var findErrorNums = function(nums) {
    let i = 0;
while (i < nums.length) {
  const num = nums[i];
  if (num !== i + 1 && nums[num - 1] !== num) {
    // Swap the element at index i with the element at index num - 1
    [nums[i], nums[num - 1]] = [nums[num - 1], nums[i]];
  } else {
    i++;
  }
}

let repeatedNum, missingNum;
for (i = 0; i < nums.length; i++) {
  if (nums[i] !== i + 1) {
    missingNum = i + 1;
    repeatedNum = nums[i];
    break;
  }
}

return [repeatedNum, missingNum];
};