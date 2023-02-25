function readBinaryWatch(num) {
    let res = [];
  
    for (let h = 0; h < 12; h++) {
      for (let m = 0; m < 60; m++) {
        if (countBits(h) + countBits(m) === num) {
          res.push(`${h}:${m < 10 ? '0' + m : m}`);
        }
      }
    }
  
    return res;
  }
  
  function countBits(num) {
    let count = 0;
  
    while (num > 0) {
      if (num & 1) {
        count++;
      }
  
      num >>= 1;
    }
  
    return count;
  }
  