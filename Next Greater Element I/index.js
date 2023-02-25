var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const map = new Map();
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && nums2[i] > stack[stack.length - 1]) {
            const smaller = stack.pop();
            map.set(smaller, nums2[i]);
        }
        stack.push(nums2[i]);
    }
    while (stack.length) {
        const smaller = stack.pop();
        map.set(smaller, -1);
    }
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        result.push(map.get(nums1[i]));
    }
    return result;
};