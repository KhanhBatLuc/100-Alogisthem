function isHappy(n) {
    const seen = new Set(); // to keep track of numbers we have seen before
    while (n !== 1 && !seen.has(n)) { // loop until n is 1 or we've seen it before
      seen.add(n); // add current number to seen set
      let sum = 0;
      while (n > 0) { // calculate the sum of squares of digits
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
      }
      n = sum; // set n to the sum for the next iteration
    }
    return n === 1; // if n is 1, it's a happy number, otherwise not
  }
  