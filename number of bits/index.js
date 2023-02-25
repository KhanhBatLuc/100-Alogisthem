var hammingWeight = function (n) {
    const numberString = n.toString(2);
    let count = 0;
    for (let i = 0; i < numberString.split("").length; i++) {
      if (numberString[i] === "1") {
        count = count + 1;
      }
    }
    return count;
  };