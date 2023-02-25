const segments = s.trim().split(/\s+/);
// Count the number of non-empty segments
return segments.filter(segment => segment !== '').length;