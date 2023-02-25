var isPalindrome = function (x) {
    if (x < 0) return false; // Negative numbers can't be palindromes

    // Convert the integer to a string and split it into an array of characters
    const strArr = String(x).split('');
  
    // Use two pointers to compare the characters from both ends of the array
    let left = 0;
    let right = strArr.length - 1;
  
    while (left < right) {
      if (strArr[left] !== strArr[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  };
  
  console.log(isPalindrome(-121));