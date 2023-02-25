function convertToBase7(num) {
    if (num === 0) {
        return "0";
    }

    let isNegative = false;

    if (num < 0) {
        isNegative = true;
        num = -num;
    }

    let base7 = "";

    while (num > 0) {
        const remainder = num % 7;
        base7 = remainder + base7;
        num = Math.floor(num / 7);
    }

    if (isNegative) {
        base7 = "-" + base7;
    }

    return base7;
}
