function reverseOnlyLetters(s) {
    let left = 0;
    let right = s.length - 1;
    let result = s.split(''); // Convert the string to an array to make swapping easier
    while (left < right) {
      if (!isEnglishLetter(result[left])) {
        left++;
      } else if (!isEnglishLetter(result[right])) {
        right--;
      } else {
        // Both left and right pointers point to English letters, so we swap them
        let temp = result[left];
        result[left] = result[right];
        result[right] = temp;
        left++;
        right--;
      }
    }
    return result.join(''); // Convert the array back to a string
  }
  
  function isEnglishLetter(c) {
    // Returns true if c is an uppercase or lowercase English letter, false otherwise
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
  }
  