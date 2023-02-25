var countAndSay = function(n) {
    if (n === 1) {
     return '1';
 }
 const prev = countAndSay(n - 1);
 let result = '';
 let count = 1;
 for (let i = 0; i < prev.length; i++) {
     if (prev[i] === prev[i + 1]) {
         count++;
     } else {
         result += count.toString() + prev[i];
         count = 1;
     }
 }
 return result;
};