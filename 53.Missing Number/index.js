var missingNumber = function(nums) {
    const n = nums.length;
  const sum = n * (n + 1) / 2;
  const arraySum = nums.reduce((acc, val) => acc + val, 0);
  return sum - arraySum;
};