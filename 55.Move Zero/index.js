let nums = [0, 1, 0, 3, 12];
var moveZeroes = function (nums) {

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      console.log(nums[i]);
        nums.splice(i,1);
        nums.push(0);
    }
  }
};

moveZeroes(nums);
console.log(nums);