function findComplement(num) {
    let bitMask = ~0; // create a bitmask of all 1's
    while (num & bitMask) {
      bitMask <<= 1; // shift the bitmask left until it's greater than num
    }
    return ~bitMask & ~num; // flip all the bits in num after the leftmost 1
  }