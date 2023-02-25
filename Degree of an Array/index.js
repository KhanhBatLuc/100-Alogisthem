function findShortestSubArray(nums) {
    const numCounts = new Map();
    let maxFreq = 0;
  
    // Iterate through the array to count the frequency of each number
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const count = (numCounts.get(num) || 0) + 1;
      numCounts.set(num, count);
      maxFreq = Math.max(maxFreq, count);
    }
  
    let minSubArrayLength = nums.length;
  
    // Iterate through the map to find the numbers with the maximum frequency
    for (let [num, count] of numCounts) {
      if (count === maxFreq) {
        let startIndex = nums.indexOf(num);
        let endIndex = nums.lastIndexOf(num);
        let subArrayLength = endIndex - startIndex + 1;
        minSubArrayLength = Math.min(minSubArrayLength, subArrayLength);
      }
    }
  
    return minSubArrayLength;
  }