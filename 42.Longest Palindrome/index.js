function longestPalindrome(s) {
    const freq = {};

    for (const char of s) {
        if (char in freq) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }

    let count = 0;
    let hasOdd = false;

    for (const char in freq) {
        if (freq[char] % 2 === 0) {
            count += freq[char];
        } else {
            count += freq[char] - 1;
            hasOdd = true;
        }
    }

    return hasOdd ? count + 1 : count;
}
