var containsDuplicate = function(nums) {
    let isExist = [];
  for (let i = 0; i < nums.length; i++) {
    if (!isExist.includes(nums[i]) && i === nums.length - 1) {
      return false;
    } else if (!isExist.includes(nums[i])) {
      isExist.push(nums[i]);
    } else if (isExist.includes(nums[i])) {
      return true;
    }
  } 
};