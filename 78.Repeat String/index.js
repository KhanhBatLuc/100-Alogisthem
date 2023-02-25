var repeatedSubstringPattern = function (s) {
    const n = s.length;
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
        const substring = s.slice(0, i);
        const repetitions = n / i;
        const repeatedString = substring.repeat(repetitions);
        if (repeatedString === s) {
          return true;
        }
      }
    }
    return false;
  };
  console.log(repeatedSubstringPattern("abab"));