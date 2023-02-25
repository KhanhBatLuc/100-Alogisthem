var isPalindrome = function (x) {
    let stringNum = x.toString();
    let newNum = stringNum.split("").reverse();
    let num = "";
    for (let i = 0; i < newNum.length; i++) {
      num = num + newNum[i];
    }
    if (Number(num) && !num.startsWith("0")) {
      return true;
    }
    return false;
  };
  
  console.log(isPalindrome(-121));