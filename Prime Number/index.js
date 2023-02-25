function countPrimeSetBits(left, right) {
    let result = 0;
    for (let i = left; i <= right; i++) {
      let count = 0;
      let num = i;
      while (num > 0) {
        if (num & 1) {
          count++;
        }
        num >>= 1;
      }
      if (isPrime(count)) {
        result++;
      }
    }
    return result;
  }
  
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  