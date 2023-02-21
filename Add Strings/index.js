function addStrings(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = '';
    while (i >= 0 || j >= 0) {
      const digit1 = i >= 0 ? num1.charAt(i) - '0' : 0;
      const digit2 = j >= 0 ? num2.charAt(j) - '0' : 0;
      const sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      const digit = sum % 10;
      result = digit + result;
      i--;
      j--;
    }
    if (carry > 0) {
      result = carry + result;
    }
    return result;
  }
  