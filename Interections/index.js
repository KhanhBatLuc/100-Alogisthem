var intersect = function (nums1, nums2) {
    let existArray = [];
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
        existArray.push(nums1[i]);
      }
    }
    return existArray;
  };