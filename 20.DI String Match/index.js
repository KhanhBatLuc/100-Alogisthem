/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let n = s.length;
    let lo = 0;
    let hi = n;
    let res = [];
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        res.push(lo);
        lo++;
      } else {
        res.push(hi);
        hi--;
      }
    }
    res.push(lo);
    return res;
  };
  