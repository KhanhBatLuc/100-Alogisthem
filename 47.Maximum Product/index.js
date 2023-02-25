var maximumProduct = function(nums) {
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
       let min1 = Infinity, min2 = Infinity;
   
       for (let num of nums) {
           if (num > max1) {
               max3 = max2;
               max2 = max1;
               max1 = num;
           } else if (num > max2) {
               max3 = max2;
               max2 = num;
           } else if (num > max3) {
               max3 = num;
           }
   
           if (num < min1) {
               min2 = min1;
               min1 = num;
           } else if (num < min2) {
               min2 = num;
           }
       }
   
       return Math.max(max1 * max2 * max3, max1 * min1 * min2);
   };