function licenseKeyFormatting(s, k) {
    // Remove dashes and convert to uppercase
    s = s.split('-').join('').toUpperCase();
    
    // Determine length of first group
    let firstGroupLen = s.length % k;
    if (firstGroupLen === 0) firstGroupLen = k;
    
    // Reformat string
    let res = '';
    let i = 0;
    while (i < s.length) {
      if (i === firstGroupLen) {
        res += '-';
      }
      res += s[i];
      i++;
      if (i < s.length && (i - firstGroupLen) % k === 0) {
        res += '-';
      }
    }
    
    return res;
  }
  