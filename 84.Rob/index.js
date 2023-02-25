var rob = function (nums) {
    let i = 0;
    let count = 0;
    while (i < nums.length) {
      count = count + nums[i];
      i = i + 2;
    }
    return count;
  };