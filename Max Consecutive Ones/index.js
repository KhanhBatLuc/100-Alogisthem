function findMaxConsecutiveOnes(nums) {
  let maxLen = 0;
  let curLen = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      curLen++;
    } else {
      maxLen = Math.max(maxLen, curLen);
      curLen = 0;
    }
  }
  
  return Math.max(maxLen, curLen);
}
