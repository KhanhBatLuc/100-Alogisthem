function reverseInteger(x) {
    let result = 0;
    while (x !== 0) {
      result = result * 10 + x % 10;
      x = parseInt(x / 10);
    }
    // Check if the result overflows the 32-bit signed integer range
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
      return 0;
    }
    return result;
  }
  