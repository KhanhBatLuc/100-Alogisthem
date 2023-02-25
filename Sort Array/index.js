
var sortedSquares = function (nums) {
    let dumbArray = [];
  
    for (let i = 0; i < nums.length; i++) {
      let doubleNum = nums[i] * nums[i];
      dumbArray.push(doubleNum);
    }
    //   console.log(dumbArray)
    return dumbArray.sort(function(a, b){return a - b});
  };