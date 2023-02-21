function isPowerOfTwo(n) {
    if (n <= 0) {
      return false; // Negative numbers and zero are not powers of two
    }
    while (n % 2 === 0) {
      n /= 2;
    }
    return n === 1;
  }
  