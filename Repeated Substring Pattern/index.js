function repeatedSubstringPattern(s) {
    for (let i = 1; i < s.length; i++) {
      if (s.length % i === 0) {
        let sub = s.substring(0, i);
        let temp = sub;
        while (temp.length < s.length) {
          temp += sub;
        }
        if (temp === s) {
          return true;
        }
      }
    }
    return false;
  }
  