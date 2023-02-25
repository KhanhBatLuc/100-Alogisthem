
var toHex = function(num) {
     if (num === 0) {
      return "0";
  }
  
  let hexDigits = "0123456789abcdef";
  let hexString = "";
  
  if (num < 0) {
      num = 0xffffffff + num + 1;
  }
  
  while (num > 0) {
      let digit = num % 16;
      hexString = hexDigits[digit] + hexString;
      num = Math.floor(num / 16);
  }
  
  return