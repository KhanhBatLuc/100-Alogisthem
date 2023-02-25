var maxCount = function(m, n, ops) {
    let minA = m, minB = n;
    
    for (let i = 0; i < ops.length; i++) {
        minA = Math.min(minA, ops[i][0]);
        minB = Math.min(minB, ops[i][1]);
    }
    
    return minA * minB;
};
