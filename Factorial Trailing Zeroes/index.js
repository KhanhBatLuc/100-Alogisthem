function trailingZeroes(n) {
    let count = 0;
    while (n >= 5) {
      count += Math.floor(n / 5);
      n = Math.floor(n / 5);
    }
    return count;
  }
  