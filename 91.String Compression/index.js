var compress = function(chars) {
    let left = 0;
    let right = 0;
    let s = '';
    while (right < chars.length) {
        if (chars[left] !== chars[right]) {
            s += chars[left];
            const count = right - left;
            if (count > 1) {
                s += count.toString();
            }
            left = right;
        }
        right++;
    }
    s += chars[left];
    const count = right - left;
    if (count > 1) {
        s += count.toString();
    }
    chars.splice(0, chars.length, ...s);
    return chars.length;
};