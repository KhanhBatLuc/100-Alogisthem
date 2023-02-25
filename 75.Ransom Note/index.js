var canConstruct = function(ransomNote, magazine) {
    const freq = {};
   for (let i = 0; i < magazine.length; i++) {
       const char = magazine[i];
       freq[char] = (freq[char] || 0) + 1;
   }
   for (let i = 0; i < ransomNote.length; i++) {
       const char = ransomNote[i];
       if (!freq[char] || freq[char] === 0) {
           return false;
       }
       freq[char]--;
   }
   return true;
};